'use client';
import { Cat } from '@/model';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Checkbox,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { FC } from 'react';
import Loader from './Loader';

interface Props {
  cats: Cat[];
}

const PhotoList: FC<Props> = ({ cats }) => {
  return (
    <Grid container spacing={2}>
      {cats.map((cat) => (
        <Grid item key={cat.id} sm={4}>
          <div
            className="cats_item"
            style={{ backgroundImage: `url(${cat.url})` }}
          >
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="info" />}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoList;
