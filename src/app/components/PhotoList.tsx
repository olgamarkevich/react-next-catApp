'use client';
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

interface Cat {
  title: any;
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

interface Props {
  cats: Cat[];
}

const PhotoList: FC<Props> = ({ cats }) => {
  console.log(cats);
  return (
    <Grid container spacing={2}>
      {cats.map((cat) => (
        <Grid item key={cat.id} sm={3}>
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
