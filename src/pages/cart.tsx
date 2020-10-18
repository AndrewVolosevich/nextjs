import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  submit: {
    marginTop: theme.spacing(4),
  },
  summary: {
    marginTop: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 0),
  },
}));

function createData(name: string, count: number, price: number) {
  return { name, count, price };
}

const rows = [
  createData("Втулка 1", 2, 12),
  createData("Втулка 2", 3, 18),
  createData("Втулка 3", 1, 6),
];

export default function Cart() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Ваша корзина
          </Typography>
        </Container>
      </div>
      <Container maxWidth={"md"}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="center">Колличество</TableCell>
                <TableCell align="right">Цена</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.count}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          component="h6"
          variant="h6"
          align="left"
          color="textPrimary"
          className={classes.summary}
        >
          Итого: {}
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Заказать
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
