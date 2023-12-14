'use client';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const FilterUI = () => {
  return (
    <FormGroup row={true}>
      <FormControlLabel control={<Checkbox />} label="Beng" />
      <FormControlLabel control={<Checkbox />} label="Abys" />
      <FormControlLabel control={<Checkbox />} label="Pers" />
      <FormControlLabel control={<Checkbox />} label="Tonk" />
    </FormGroup>
  );
};

export default FilterUI;
