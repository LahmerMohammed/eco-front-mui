// prettier-ignore
import { Theme } from '@material-ui/core';
import * as React from 'react';
import { makeStyles  } from '@material-ui/styles';
import {TopHeader} from '../components/TopHeader';
import { Header } from '../components/Header';
import { NavBar } from './NavBar';
import { MRegister } from '../models/MRegister';
interface Props {

}

export function HomePage(props: Props) {

const {  } = props;

const [open, setOpen] = React.useState(true);


return (
  <div className="root">
    <TopHeader/>
    <Header setOpen={setOpen}/>
    <NavBar/>
    <MRegister open={open} setOpen={setOpen}/>
  </div>
);
}

const useStyles = makeStyles((theme: Theme) => ({

  root: {
    width: '100vw',
    height: '100vh',
  },
}));