'use client';

import type { Dispatch, FC, SetStateAction } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const SelectUI: FC<Props> = ({ setIsLoading }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSortPress = (e: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('order', e);
    setIsLoading(true);
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
