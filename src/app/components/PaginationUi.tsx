'use client';
import { Grid, Pagination } from '@mui/material';

const PaginationUi = () => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
  };
  return (
    <Grid container m={2} justifyContent="center">
      <Pagination count={10} color="primary" onChange={handleChange} />
    </Grid>
  );
};

export default PaginationUi;
