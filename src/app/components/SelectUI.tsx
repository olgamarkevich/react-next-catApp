'use client';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export default function SelectUI() {
  const [sort, setSort] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Sort</InputLabel>
      <Select value={sort} label="Sort" onChange={handleChange}>
        <MenuItem value="rand">rand</MenuItem>
        <MenuItem value="asc">asc</MenuItem>
        <MenuItem value="desc">desc</MenuItem>
      </Select>
    </FormControl>
  );
}
