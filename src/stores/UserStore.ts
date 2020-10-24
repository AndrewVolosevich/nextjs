import { observable, action, computed } from "mobx";
import autoBind from "auto-bind";
import api from "../api/sleeve-server";

export default class UserStore {
  private readonly storageTokenName: string = "tube-user-token";
  @observable user = null;

  constructor() {
    autoBind(this);
  }

  @action setUser(userData) {
    this.user = { ...this.user, ...userData };
  }

  login(userData) {
    this.setUser(userData);
    this.saveToStorage();
  }

  @action logout() {
    this.user = null;
    this.removeFromStorage();
  }

  @computed get isAuth() {
    return !!this.user;
  }

  saveToStorage() {
    localStorage.setItem(this.storageTokenName, this.user.token);
  }

  removeFromStorage() {
    localStorage.removeItem(this.storageTokenName);
  }

  getFromStorage() {
    const token = localStorage.getItem(this.storageTokenName);
    token
      ? api
          .info(token)
          .then((resp) => {
            this.login({ ...resp.data, token });
          })
          .catch((error) => {
            console.log(error);
          })
      : null;
  }
}
