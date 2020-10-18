import React from "react";
import { useRouter } from "next/router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "../drawer";
import { staticMenuItems } from "../../consts/menu-items";

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
  const menuItem = Object.values(staticMenuItems).filter((item) => {
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
          <Button color="inherit" onClick={() => router.push("/auth")}>
            <AccountCircleIcon />
            {""}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
