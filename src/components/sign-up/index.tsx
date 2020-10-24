import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../api/sleeve-server";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import {
  validateConfirm,
  validateEmail,
  validatePassword,
} from "../../helpers/validation";
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

export default function SignUp({ onSignUp }: { onSignUp: () => void }) {
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
  const [confirm, setConfirm] = useState({
    value: "",
    error: " ",
  });
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail({ value: e.target.value, error: " " });
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword({ value: e.target.value, error: " " });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirm({ value: e.target.value, error: " " });
  };

  const [message, setMessage] = useState<MessageType>({
    type: "success",
    duration: 5000,
    text: "Все хорошо",
  });
  const [showMessage, setShowMessage] = useState(false);
  const handleClose = () => {
    setShowMessage(false);
  };

  const register = () => {
    setIsLoading(true);
    api
      .register({
        email: email.value,
        password: password.value,
        confirm: confirm.value,
      })
      .then(() => {
        setIsLoading(false);
        onSignUp();
        return;
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
      });
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Зарегистрироваться
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          error={email.error !== " "}
          helperText={email.error}
          variant="outlined"
          margin="normal"
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
          variant="outlined"
          margin="normal"
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
        <TextField
          error={confirm.error !== " "}
          helperText={confirm.error}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm"
          label="Повторите пароль"
          type="password"
          id="confirm-password"
          value={confirm.value}
          onChange={handleConfirm}
          onBlur={() =>
            setConfirm({
              ...confirm,
              error: validateConfirm(password.value, confirm.value),
            })
          }
        />

        <Button
          disabled={
            isLoading ||
            email.error !== " " ||
            password.error !== " " ||
            confirm.error !== " "
          }
          type="submit"
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
            setConfirm({
              ...confirm,
              error: validateConfirm(password.value, confirm.value),
            });
            register();
          }}
        >
          Зарегистрироваться
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
