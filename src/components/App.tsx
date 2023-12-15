'use client';

import { Container } from '@mui/material';
import FilterSortUI from './FilterSortUI';
import PhotoList from './PhotoList';
import PaginationUi from './PaginationUi';
import { FC, useState } from 'react';
import Loader from './Loader';
import { Breed, Cat } from '@/model';

interface Props {
  cats: Cat[];
  breeds: Breed[];
}

const App: FC<Props> = ({ cats, breeds }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container maxWidth="lg" style={{ paddingTop: '80px' }}>
      <FilterSortUI data={breeds} setIsLoading={setIsLoading} />
      <PhotoList cats={cats} />
      <PaginationUi itemsCount={cats.length} />
      <Loader open={isLoading} />
    </Container>
  );
};

export default App;
