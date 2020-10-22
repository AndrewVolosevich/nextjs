import axios from "axios";

const apiServer = "http://localhost:5555";

export default {
  login: (userData) => {
    return axios.post(`${apiServer}/api/auth/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  register: (userData) => {
    return axios.post(`${apiServer}/api/auth/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
