import { useState } from "react";
import Layout from "../components/layout";
import SignIn from "../components/sign-in";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignUp from "../components/sign-up";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Авторские права © "}
      <Link color="inherit" href="https://material-ui.com/">
        Sleeve
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Home() {
  const [isSignin, setIsSignin] = useState(true);

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {isSignin ? <SignIn /> : <SignUp onSignUp={() => setIsSignin(true)} />}
        <Grid container>
          <Grid item xs>
            {isSignin ? (
              <Link
                href="#"
                variant="body2"
                onClick={(e) => e.preventDefault()}
              >
                Забыли пароль?
              </Link>
            ) : null}
          </Grid>
          <Grid item>
            {isSignin ? (
              <Link
                href="#"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignin(false);
                }}
              >
                {"Нет аккаунта? Зарегистрируйтесь"}
              </Link>
            ) : (
              <Link
                href="#"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignin(true);
                }}
              >
                {"Уже есть аккаунт? Войдите"}
              </Link>
            )}
          </Grid>
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
