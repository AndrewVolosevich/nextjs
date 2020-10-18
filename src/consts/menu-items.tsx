import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ViewListIcon from "@material-ui/icons/ViewList";

export const staticMenuItems = {
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
  auth: {
    text: "Войти",
    path: `/auth`,
    logo: <AccountCircleIcon />,
  },
};
