'use client';
import { FC, useState } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

import FilterUI from './FilterUI';
import SelectUI from './SelectUI';
import { Breed } from '@/model';

interface Props {
  data: Breed[];
}

const FilterSortUI: FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item md={10}>
        <FilterUI data={data} />
      </Grid>
      <Grid item md={2}>
        <SelectUI />
      </Grid>
    </Grid>
  );
};

export default FilterSortUI;
