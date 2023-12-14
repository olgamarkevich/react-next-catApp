'use client';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function FilterUI() {
  return (
    <FormGroup row={true}>
      <FormControlLabel control={<Checkbox />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Required" />
      <FormControlLabel control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}
