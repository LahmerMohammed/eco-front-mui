// prettier-ignore
import { Theme } from '@material-ui/core';
import * as React from 'react';
import { makeStyles  } from '@material-ui/styles';
import {TopHeader} from '../components/TopHeader';
import { Header } from '../components/Header';
interface Props {

}

export function HomePage(props: Props) {

const {  } = props;

return (
  <div className="root">
    <TopHeader/>
    <Header/>
  </div>
);
}

const useStyles = makeStyles((theme: Theme) => ({

  root: {
  },
}));