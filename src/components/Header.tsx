// prettier-ignore
import { Badge, Button, Container, Grid, IconButton, Theme, Typography } from '@material-ui/core';
import { createStyles , makeStyles } from '@material-ui/styles';
import * as React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBagOutlined';
import { SearchBar } from './SearchBar';
import { NavBar } from '../pages/NavBar';


interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function Header(props: Props) {

const { setOpen } = props;
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
          <Grid sx={{ mr: { lg: '2rem'}}} item md={6}  lg={3} xl={1} className={classes.item}> 
            <IconButton size="medium" onClick={() => setOpen(true)}>
             <AccountCircleRoundedIcon fontSize="large"/> 
            </IconButton>
          </Grid>
          <Grid sx={{ ml: { lg: '2rem'}}} item md={6} lg={3} xl={1} className={classes.item}>
            <IconButton  size="medium">
              <Badge badgeContent={3} color="secondary">
                <ShoppingBagOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton> 
          </Grid>
          
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
    maxWidth: '1920px'
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
    },
    alignItems: 'center'
  },
  item:{
    [theme.breakpoints.up('lg')]: {
      marginRight: '1rem',
      marginLeft: '1rem',
    },
    textAlign: 'center'
  },
}));