'use client';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

import FilterUI from './FilterUI';
import SelectUI from './SelectUI';
import { Breed } from '@/model';
import Loader from './Loader';

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
