'use client';

import type { FC } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox, Grid } from '@mui/material';

import { Cat } from '@/model';

import Loader from './Loader';

interface Props {
  cats: Cat[];
}

const PhotoList: FC<Props> = ({ cats }) => {
  let favorites: string[];

  if (JSON.parse(localStorage.getItem('favorites') as string) !== null) {
    favorites = JSON.parse(localStorage.getItem('favorites') as string);
  } else favorites = [];

  console.log(favorites);

  const handleChange = (checked: boolean, id: string) => {
    if (checked) {
      favorites = [...favorites, id];
    } else {
      favorites = favorites.filter((item) => item !== id);
      console.log(checked);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <Grid container spacing={2}>
      {cats.map((cat) => (
        <Grid item key={cat.id} md={4} sm={6} xs={12}>
          <div
            className="cats_item"
            style={{ backgroundImage: `url(${cat.url})` }}
          >
            <Checkbox
              icon={<FavoriteBorder />}
              onChange={(e) => handleChange(e.target.checked, cat.id)}
              checkedIcon={<Favorite color="info" />}
              checked={favorites.includes(cat.id)}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoList;
