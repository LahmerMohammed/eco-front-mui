// prettier-ignore
import { Box, Grid, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { UserDashboardItem } from '../user/UserDashboardItem';
import Add from '@mui/icons-material/Add';
import { NewProductIcon } from '../../icons/NewProductIcon';
import { ProductIcon } from '../../icons/ProductIcon';
import { useLocation } from 'react-router-dom';


interface Props {

}

export function VendorMenu(props: Props) {

  const { } = props;
  const classes = useStyles();

  //const location = useLocation();
  const path = ""/* location.pathname */;

  return (
    <Box style={style.root}>
      <Paper style={style.paper} elevation={1}>
        <Grid container direction="column" rowGap={3} style={style.container}>
          <Grid item container style={style.section}>
            <UserDashboardItem
              title="Dashboard"
              value={3}
              icon={<GridViewSharpIcon fontSize="large" />}
              to={`${path}/dashboard`}
            />
            <UserDashboardItem
              title="Products"
              value={300}
              icon={<ProductIcon fontSize="large" />}
              to={`${path}/products`}
            />
            <UserDashboardItem
              title="Add New Product"
              icon={<NewProductIcon fontSize="large" />}
              to={`${path}/products/add`}
            />
            <UserDashboardItem
              title="Orders"
              value={3}
              icon={<ShoppingCartIcon fontSize="large" />}
              to={`${path}/orders`}
            />
            <UserDashboardItem
              title="Account Settings"
              icon={<SettingsIcon fontSize="large" />}
              to={`${path}/account-settings`}
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