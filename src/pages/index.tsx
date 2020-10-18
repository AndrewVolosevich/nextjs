import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 4, 8),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Контейнеры из втулок
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Какой-то очень длинный текст о том что эти втулки немного лучше чем
            благословление божие и все в таком же стиле. Бла бла блаб ващтва
            щшвтыщва шытваыщвтаю.
          </Typography>
        </Container>
      </div>
    </Layout>
  );
}
