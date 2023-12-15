'use client';
import { Button, Grid } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface Props {
  itemsCount: number;
}

const PaginationUi: FC<Props> = ({ itemsCount }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = searchParams.get('page');

  const handleGoPress = (direction: 'prev' | 'next') => {
    let nextPage = 0;

    if (direction === 'prev') {
      nextPage = +(currentPage || 0) - 1;
    }

    if (direction === 'next') {
      nextPage = +(currentPage || 0) + 1;
    }

    const params = new URLSearchParams(searchParams);

    if (nextPage >= 1) {
      params.set('page', nextPage.toString());
    } else {
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Grid container justifyContent="center" m={3} gap={3}>
      <Button
        disabled={!currentPage}
        variant="contained"
        onClick={() => {
          handleGoPress('prev');
        }}
      >
        prev
      </Button>
      <Button
        disabled={itemsCount < 9}
        variant="contained"
        onClick={() => {
          handleGoPress('next');
        }}
      >
        next
      </Button>
    </Grid>
  );
};

export default PaginationUi;
