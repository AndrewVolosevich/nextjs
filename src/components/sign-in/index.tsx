import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../api/sleeve-server";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useRouter } from "next/router";
import { validateEmail, validatePassword } from "../../helpers/validation";
import { MessageType } from "../../types/material";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={8} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const router = useRouter();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: " ",
  });
  const [password, setPassword] = useState({
    value: "",
    error: " ",
  });

  const [message, setMessage] = useState<MessageType>({
    type: "success",
    duration: 5000,
    text: "Все хорошо",
  });

  const [showMessage, setShowMessage] = useState(false);
  const handleClose = () => {
    setShowMessage(false);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail({ value: e.target.value, error: " " });
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword({ value: e.target.value, error: " " });
  };

  const login = () => {
    setIsLoading(true);
    api
      .login({ email: email.value, password: password.value })
      .then(() => {
        setIsLoading(false);

        router.push("/");
      })
      .catch((e) => {
        if (typeof e.response.data !== undefined) {
          setMessage({
            type: "warning",
            duration: 5000,
            text: e.response.data.message,
          });
          setShowMessage(true);
          setIsLoading(false);
          return;
        }
        console.log(e);
      });
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Войдите
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          error={email.error !== " "}
          helperText={email.error}
          margin="normal"
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Ваша почта"
          name="email"
          autoComplete="email"
          value={email.value}
          onBlur={() =>
            setEmail({ ...email, error: validateEmail(email.value) })
          }
          onChange={handleEmail}
          autoFocus
        />
        <TextField
          error={password.error !== " "}
          helperText={password.error}
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          value={password.value}
          onChange={handlePassword}
          onBlur={() =>
            setPassword({
              ...password,
              error: validatePassword(password.value),
            })
          }
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запомнить меня"
        />
        <Button
          disabled={isLoading || email.error !== " " || password.error !== " "}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => {
            e.preventDefault();
            setEmail({ ...email, error: validateEmail(email.value) });
            setPassword({
              ...password,
              error: validatePassword(password.value),
            });
            login();
          }}
        >
          Войти
        </Button>
      </form>
      <Snackbar
        open={showMessage}
        autoHideDuration={message.duration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
        disableWindowBlurListener={true}
      >
        <Alert onClose={handleClose} severity={message.type}>
          {message.text}
        </Alert>
      </Snackbar>
    </div>
  );
}
