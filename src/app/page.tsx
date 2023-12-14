import { getData } from './api/api';
import FilterUI from './components/FilterUI';
import PaginationUi from './components/PaginationUi';
import PhotoList from './components/PhotoList';
import SelectUI from './components/FilterSortUI';
import styles from './page.module.css';
import { AppBar, Container, Grid, Pagination, Toolbar } from '@mui/material';
import FilterSortUI from './components/FilterSortUI';

interface Cat {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

export default async function Home() {
  const cats = await getData(12, 'rand');
  return (
    <>
      <Container maxWidth="lg" style={{ paddingTop: '80px' }}>
        <FilterSortUI />
        <PhotoList cats={cats} />
        <PaginationUi />
      </Container>
    </>
  );
}
