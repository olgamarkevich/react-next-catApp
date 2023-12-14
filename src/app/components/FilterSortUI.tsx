'use client';
import { useState } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';
import { getData } from '../api/api';
import FilterUI from './FilterUI';
import SelectUI from './SelectUI copy';

const FilterSortUI = () => {
  const [sort, setSort] = useState('');

  const handleChange = async (event: SelectChangeEvent) => {
    setSort(event.target.value);
    const cats = await getData(10, event.target.value);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item md={10}>
        <FilterUI />
      </Grid>
      <Grid item md={2}>
        <SelectUI />
      </Grid>
    </Grid>
  );
};

export default FilterSortUI;
