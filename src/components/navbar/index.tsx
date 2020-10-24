import React from "react";
import { useRouter } from "next/router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "../drawer";
import { getMenuItems } from "../../consts/menu-items";
import { userStore } from "../../stores";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(4),
    },
  })
);

const findPageTitle = (path) => {
  const menuItem = Object.values(getMenuItems()).filter((item) => {
    return item.path === path;
  });
  return menuItem[0].text;
};

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            {findPageTitle(router.route)}
          </Typography>
          {userStore.isAuth ? (
            <Button color="inherit" onClick={() => userStore.logout()}>
              <ExitToAppIcon />
              {"Выйти"}
            </Button>
          ) : (
            <Button color="inherit" onClick={() => router.push("/auth")}>
              <AccountCircleIcon />
              {"Войти"}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
