'use client';

import { CatsQuery } from '@/model';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SelectUI = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSortPress = (e: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('order', e);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Sort</InputLabel>
      <Select
        label="Sort"
        onChange={(e) => handleSortPress(e.target.value as string)}
      >
        <MenuItem value="asc">asc</MenuItem>
        <MenuItem value="desc">desc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectUI;