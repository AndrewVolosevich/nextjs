import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ViewListIcon from "@material-ui/icons/ViewList";
import React from "react";
import { observer } from "mobx-react";
import { userStore } from "../stores";

export const getMenuItems = () => {
  const isAuth = userStore.isAuth;
  if (isAuth) {
    return {
      home: {
        text: "Главная",
        path: `/`,
        logo: <HomeIcon />,
      },
      goods: {
        text: "Товары",
        path: `/goods`,
        logo: <ViewListIcon />,
      },
      cart: {
        text: "Корзина",
        path: `/cart`,
        logo: <ShoppingCartIcon />,
      },
    };
  } else {
    return {
      home: {
        text: "Главная",
        path: `/`,
        logo: <HomeIcon />,
      },
      goods: {
        text: "Товары",
        path: `/goods`,
        logo: <ViewListIcon />,
      },
      auth: {
        text: "Войти",
        path: `/auth`,
        logo: <AccountCircleIcon />,
      },
    };
  }
};
