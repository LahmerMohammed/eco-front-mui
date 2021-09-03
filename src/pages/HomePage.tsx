// prettier-ignore
import { Theme } from '@material-ui/core';
import * as React from 'react';
import { makeStyles  } from '@material-ui/styles';
import {TopHeader} from '../components/TopHeader';
import { Header } from '../components/Header';
import { NavBar } from './NavBar';
import { MRegister } from '../models/MRegister';
import { BottomAppBar } from '../components/BottomAppBar';
import { MainProductSlide } from '../components/MainProductSlide';
import { FlashDeals } from '../components/FlashDeals';

interface Props {

}

export function HomePage(props: Props) {

const {  } = props;

const [open, setOpen] = React.useState(false);

const classes = useStyles();

return (
  <div className={classes.root}>
    <TopHeader/>
    <Header setOpen={setOpen}/>
    <NavBar/>
    <MRegister open={open} setOpen={setOpen}/>
    <MainProductSlide/>
    <FlashDeals/>
    <BottomAppBar/>
  </div>
);
}

const useStyles = makeStyles((theme: Theme) => ({

  root: {
    width: '100vw',
    height: '100vh',  
  },
}));