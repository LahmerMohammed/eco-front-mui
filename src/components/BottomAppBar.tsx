// prettier-ignore
import {  AppBar, Button, IconButton, Theme, Toolbar } from '@mui/material';
import { createStyles , makeStyles } from '@mui/styles';
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface Props {

}

interface BarItemProps {
  name: string;
  icon: React.ReactNode;
}

function BarItem(props: BarItemProps) {

  const classes = useStyles();

  return (
    <Button  className={classes.btn} fullWidth startIcon={props.icon} >
      {props.name}
    </Button>

  )
}

export function BottomAppBar(props: Props) {

const {  } = props;
const classes = useStyles();

return (
  <div className={classes.root}>
      <AppBar className={classes.appBar}  position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar className={classes.toolBar}>
          <BarItem name="Home" icon={<HomeIcon/>}/>
          <BarItem name="Category" icon={<HomeIcon/>}/>
          <BarItem name="Cart" icon={<ShoppingCartIcon/>}/>
          <BarItem name="Account" icon={<AccountCircleIcon/>}/>
        </Toolbar>
      </AppBar>
  </div>
);
}

const useStyles = makeStyles( (theme: Theme) => createStyles({

  root: {
    [theme.breakpoints.up('md')]:{
      display: 'none'
    }
  },
  toolBar:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'inherit',
    padding: '0 !important',
    backgroundColor: "#fff",

  },
  appBar: {
  },
  btn:{
    height: 'inherit',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000 !important',
    '&:hover': {
      color: '#D23F57 !important',
    },
    fontSize: '1.125rem !important'
  }
}));