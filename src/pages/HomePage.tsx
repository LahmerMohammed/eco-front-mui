// prettier-ignore
import { Theme } from '@mui/material';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { TopHeader } from '../components/TopHeader';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { MRegister } from '../models/MRegister';
import { BottomAppBar } from '../components/BottomAppBar';
import { MainProductSlide } from '../components/MainProductSlide';
import { FlashDeals } from '../components/FlashDeals';

interface Props {

}

export function HomePage(props: Props) {

  const { } = props;

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainProductSlide />
      <FlashDeals />
      <BottomAppBar />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({

  root: {
    width: '100vw',
    height: '100vh',
  },
}));