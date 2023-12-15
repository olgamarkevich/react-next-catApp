import type { CatsQuery } from '@/model';
import { fetchBreeds, fetchCats } from '@/api';
import PaginationUi from '../components/PaginationUi';
import PhotoList from '@/components/PhotoList';

import { Container } from '@mui/material';
import FilterSortUI from '../components/FilterSortUI';
import { useState } from 'react';
import App from '@/components/App';

export default async function Home({
  searchParams,
}: {
  searchParams: CatsQuery;
}) {
  const catsFetch = fetchCats(searchParams);
  const breedsFetch = fetchBreeds();

  const [cats, breeds] = await Promise.all([catsFetch, breedsFetch]);
  return <App cats={cats} breeds={breeds} />;
}
