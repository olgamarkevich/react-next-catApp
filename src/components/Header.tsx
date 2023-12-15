'use client';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Link from 'next/link';

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
          <Link href="favorites" className="link">
            My Favorites
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
