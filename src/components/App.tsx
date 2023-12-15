'use client';

import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@mui/material';

import type { Breed, Cat } from '@/model';

import FilterSortUI from './FilterSortUI';
import PhotoList from './PhotoList';
import PaginationUi from './PaginationUi';
import Loader from './Loader';

interface Props {
  cats: Cat[];
  breeds: Breed[];
}

const App: FC<Props> = ({ cats, breeds }) => {
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [searchParams]);

  return (
    <Container maxWidth="lg" style={{ paddingTop: '80px' }}>
      <FilterSortUI data={breeds} setIsLoading={setIsLoading} />
      <PhotoList cats={cats} />
      <PaginationUi itemsCount={cats.length} setIsLoading={setIsLoading} />
      <Loader open={isLoading} />
    </Container>
  );
};

export default App;
