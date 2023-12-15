'use client';
import { useEffect, useState } from 'react';
import type { FC, Dispatch, SetStateAction } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import type { Breed } from '@/model';

interface Props {
  data: Breed[];
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FilterUI: FC<Props> = ({ data, setIsLoading }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filter, setFilter] = useState<string[]>([]);

  const handleSelectPress = (breedId: string, checked: boolean) => {
    if (checked) {
      setFilter((prev) => [...prev, breedId]);
    } else {
      setFilter((prev) => prev.filter((item) => item !== breedId));
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (filter.length) {
      params.set('breed_ids', filter.join(','));
    } else {
      params.delete('breed_ids');
    }

    setIsLoading(true);
    replace(`${pathname}?${params.toString()}`);
  }, [filter, pathname, replace, searchParams, setIsLoading]);

  return (
    <FormGroup row={true}>
      {data.map((checkbox) => (
        <FormControlLabel
          key={checkbox.id}
          control={
            <Checkbox
              onChange={(e) => handleSelectPress(checkbox.id, e.target.checked)}
            />
          }
          label={checkbox.name}
        />
      ))}
    </FormGroup>
  );
};

export default FilterUI;
