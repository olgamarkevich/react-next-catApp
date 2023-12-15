'use client';

import Link from 'next/link';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Link href="/" className="link" align-items="center">
            <Grid container alignItems="center">
              <PetsIcon />
              <Typography marginLeft="5px">Cats photo</Typography>
            </Grid>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
