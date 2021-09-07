// prettier-ignore
import { Box, Grid, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';

import { UserDashboardItem } from '../components/UserDashboardItem';


interface Props {

}

export function UserMenu(props: Props) {

  const { } = props;
  const classes = useStyles();

  return (
    <Box style={style.root}>
      <Paper style={style.paper} elevation={1}>
        <Grid container direction="column" rowGap={3} style={style.container}>
          <Grid item container style={style.section}>
            <Typography paragraph sx={{ m: 0 }}>
              DASHBORD
            </Typography>
            <UserDashboardItem
              title="Whishlist"
              value={3}
              icon={<FavoriteBorderOutlinedIcon fontSize="large" />}
              to="/whishlist"
            />
            <UserDashboardItem
              title="Orders"
              value={3}
              icon={<ShoppingBagIcon fontSize="large" />}
              to="/orders"
            />

          </Grid>
          <Grid item container style={style.section}>
            <Typography paragraph sx={{ m: 0 }}>
              ACCOUNT SETTINGS
            </Typography>
            <UserDashboardItem
              title="Profile Info"
              value={3}
              icon={<AccountCircleRoundedIcon fontSize="large" />}
              to="/profile"
            />
            <UserDashboardItem
              title="Addresses"
              value={3}
              icon={<LocationOnIcon fontSize="large" />}
              to="/address"
            />

            <UserDashboardItem
              title="Payment Methods"
              value={3}
              icon={<PaymentIcon fontSize="large" />}
              to="/payment-methods"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}





const style = {
  paper: {
    color: '#959dae',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  section: {
    flexDirection: 'column',
    rowGap: '0.5rem'

  } as React.CSSProperties,
  container: {
    padding: '2rem'
  } as React.CSSProperties,
  root: {
  }
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: {

  }
}));