import { NoSsr, ThemeProvider } from "@material-ui/core";
import NavBar from "../navbar";
import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
});
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <NavBar />

          <main>{children}</main>
        </NoSsr>
      </ThemeProvider>
    </>
  );
}

export default Layout;
