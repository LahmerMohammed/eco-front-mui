import { Backdrop, CircularProgress } from '@mui/material';
import * as React from 'react';

interface Props {
  open: boolean,
}

export function LoadingPage(props: Props) {

  const { open } = props;

  return (
    <div >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress size={80} color="inherit" />
      </Backdrop>
    </div>
  );
}

