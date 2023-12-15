'use client';
import { Breed } from '@/model';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface Props {
  data: Breed[];
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FilterUI: FC<Props> = ({ data, setIsLoading }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filterCheckbox, setFilterCheckbox] = useState<string[]>([]);

  const handleSelectPress = (breedId: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      setFilterCheckbox([...filterCheckbox, breedId]);
      params.set('breed_ids', filterCheckbox.join(','));
    } else {
      let filterCheckboxV2 = filterCheckbox.filter((item) => item !== breedId);
      setFilterCheckbox(filterCheckboxV2);
      params.set('breed_ids', filterCheckbox.join(','));
    }

    if (filterCheckbox.length === 0) {
      params.delete('breed_ids');
    }
    setIsLoading(true);
    replace(`${pathname}?${params.toString()}`);
  };

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
