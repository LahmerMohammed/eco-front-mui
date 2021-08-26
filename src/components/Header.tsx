// prettier-ignore
import { Container, Grid, IconButton, Theme, Typography } from '@material-ui/core';
import { createStyles , makeStyles } from '@material-ui/styles';
import * as React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBagOutlined';
import { SearchBar } from './SearchBar';


interface Props {

}

export function Header(props: Props) {

const {  } = props;
const classes = useStyles();
return (
    <div className={classes.root}>
      <Grid justifyContent='space-between' container className={classes.container}>
        <Grid sx={{ display: { xs: 'none' , md: 'flex'} }} md={2} xl={3} item className={classes.logo}>
          <Typography  variant='h4'>LoGo</Typography>
        </Grid>
        <Grid alignItems='center'  xs={12} md={8} xl={6} container className={classes.search}>
          <SearchBar/>
        </Grid>
        <Grid sx={{ display: { xs: 'none' , md:'flex' } }} md={2} xl={3} container className={classes.accountCart}>
          <IconButton > <AccountCircleRoundedIcon fontSize="large" /> </IconButton>
          <IconButton > <ShoppingBagOutlinedIcon fontSize="large" /> </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}



const useStyles = makeStyles((theme: Theme) => createStyles({
  root:{
    height: '80px',
    margin: '0 auto',
    width: '100%',
  },
  container:{
    height: 'inherit',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width:'100%',
    },
  },
  logo:{
    justifyContent: 'center',
    alignItems:'center'
  },
  search:{
  },
  accountCart:{
    justifyContent:'space-evenly',
    [theme.breakpoints.up('lg')]: {
      justifyContent:'center',
    }
  },
}));