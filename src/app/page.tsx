import { getData } from './api/api';
import FilterUI from './components/FilterUI';
import SelectUI from './components/SelectUI';
import styles from './page.module.css';
import { AppBar, Container, Grid, Pagination, Toolbar } from '@mui/material';
import { GetStaticProps } from 'next';

export default async function Home() {
  const cats = await getData(4);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>Cats photo</Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ paddingTop: '80px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={10}>
            <FilterUI />
          </Grid>
          <Grid item md={2}>
            <SelectUI />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {cats.map((cat) => (
            <Grid item key={cat.id} sm={3}>
              <div
                className="cats_item"
                style={{ backgroundImage: `url(${cat.url})` }}
              ></div>
            </Grid>
          ))}
        </Grid>

        <Grid container m={2} justifyContent="center">
          <Pagination count={10} color="primary" />
        </Grid>
      </Container>
    </>
  );
}
