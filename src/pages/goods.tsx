import Layout from "../components/layout";
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonWrapper: {
    padding: theme.spacing(0, 2, 2),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <Layout>
      {/* Hero unit */}
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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Название товара
                  </Typography>
                  <Typography>
                    Описание товара, чем интереснее тем лучше.
                  </Typography>
                </CardContent>
                <Grid
                  className={classes.buttonWrapper}
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Button size="small" color="primary">
                    Подробнее
                  </Button>
                  <Button size="small" color="secondary">
                    В корзину
                  </Button>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
