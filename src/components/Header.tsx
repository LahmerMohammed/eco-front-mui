// prettier-ignore
import { Badge, Button, Container, Grid, IconButton, Menu, MenuItem, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { SearchBar } from './SearchBar';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { userService } from '../services/userService';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/action-creators/login-actions';


interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function Header(props: Props) {

  const history = useHistory();

  const dispatch = useDispatch();

  const { logout } = bindActionCreators(actionCreators, dispatch);

  const loggedIn: boolean = useSelector((state: RootState) => state.login.loggedIn);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {


    if (loggedIn) {
      setAnchorEl(event.currentTarget);
    } else {
      setOpen(true);
    }

  }

  const CloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOnClickMenu = (id: string) => {

    if (id == "profile") {

      history.push({
        pathname: '/user/profile'
      });

    } else if (id == "logout") {

      logout();
      const token = localStorage.getItem('token');

      userService.logout(token);

      history.push({
        pathname: '/'
      });
    }

    CloseMenu();
  }

  const { setOpen } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid justifyContent='space-between' container className={classes.container}>
        <Grid sx={{ display: { xs: 'none', md: 'flex' } }} md={2} xl={3} item className={classes.logo}>
          <Typography variant='h4'>LoGo</Typography>
        </Grid>
        <Grid alignItems='center' xs={12} md={8} xl={6} container className={classes.search}>
          <SearchBar />
        </Grid>
        <Grid sx={{ display: { xs: 'none', md: 'flex' } }} md={2} xl={3} container className={classes.accountCart}>
          <Grid sx={{ mr: { lg: '2rem' } }} item md={6} lg={3} xl={1} className={classes.item}>
            <IconButton size="medium"
              onClick={handleUserClick}
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}

            open={openMenu}
            onClose={CloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleOnClickMenu("profile")}>Profile</MenuItem>
            <MenuItem onClick={() => handleOnClickMenu("logout")}>Logout</MenuItem>
          </Menu>
          <Grid sx={{ ml: { lg: '2rem' } }} item md={6} lg={3} xl={1} className={classes.item}>
            <IconButton size="medium">
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
  root: {
    height: '80px',
    margin: '0 auto',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
  },
  container: {
    height: 'inherit',
    width: '80%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
    maxWidth: '1920px'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
  },
  accountCart: {
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center',
    },
    alignItems: 'center'
  },
  item: {
    [theme.breakpoints.up('lg')]: {
      marginRight: '1rem',
      marginLeft: '1rem',
    },
    textAlign: 'center'
  },
}));