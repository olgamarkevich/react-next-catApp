import type { CatsQuery } from '@/model';
import { fetchBreeds, fetchCats } from '@/api';
import PaginationUi from '../components/PaginationUi';
import PhotoList from '@/components/PhotoList';

import { Container } from '@mui/material';
import FilterSortUI from '../components/FilterSortUI';

export default async function Home({
  searchParams,
}: {
  searchParams: CatsQuery;
}) {
  const catsFetch = fetchCats(searchParams);
  const breedsFetch = fetchBreeds();

  const [cats, breeds] = await Promise.all([catsFetch, breedsFetch]);

  console.log(cats);

  return (
    <>
      <Container maxWidth="lg" style={{ paddingTop: '80px' }}>
        <FilterSortUI data={breeds} />
        <PhotoList cats={cats} />
        <PaginationUi itemsCount={cats.length} />
      </Container>
    </>
  );
}
