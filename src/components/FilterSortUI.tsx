'use client';

import type { FC, Dispatch, SetStateAction } from 'react';
import { Grid } from '@mui/material';

import type { Breed } from '@/model';

import FilterUI from './FilterUI';
import SelectUI from './SelectUI';

interface Props {
  data: Breed[];
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FilterSortUI: FC<Props> = ({ data, setIsLoading }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item md={10}>
        <FilterUI data={data} setIsLoading={setIsLoading} />
      </Grid>
      <Grid item md={2}>
        <SelectUI setIsLoading={setIsLoading} />
      </Grid>
    </Grid>
  );
};

export default FilterSortUI;
