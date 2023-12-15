'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox, Grid } from '@mui/material';

import { Cat } from '@/model';

import Loader from './Loader';

interface Props {
  cats: Cat[];
}

const PhotoList: FC<Props> = ({ cats }) => {
  const [favorites, setFavourtites] = useState<string[]>([]);
  const [favouritesLoaded, setFavourtitesLoaded] = useState(false);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('favorites') as string);
      setFavourtites(data);
      setFavourtitesLoaded(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (checked: boolean, id: string) => {
    if (checked) {
      setFavourtites((prev) => [...prev, id]);
    } else {
      setFavourtites((prev) => prev.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    if (favouritesLoaded) {
      try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (err) {
        console.log(err);
      }
    }
  }, [favorites, favouritesLoaded]);

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
