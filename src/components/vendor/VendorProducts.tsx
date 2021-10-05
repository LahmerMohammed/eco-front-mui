// prettier-ignore
import { Avatar, Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import { BoxIcon } from '../../icons/BoxIcon';
import { Section } from '../user/Section';
import { ProductItem } from './ProductItem';

interface Props {

}


const products = [
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    image: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: "Nike React Phantom Run Flyknit 2",
    stock_available: Math.floor(Math.random() * 50) + 1,
    regular_price: 350.00,
    sale_price: 350.00,
  },
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    image: "",
    name: "Nike React Phantom Run Flyknit 2",
    stock_available: Math.floor(Math.random() * 50) + 1,
    regular_price: 700.00,
    sale_price: 700.00,
  },
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    image: "",
    name: "Nike React Phantom Run Flyknit 2",
    stock_available: Math.floor(Math.random() * 50) + 1,
    regular_price: 300.00,
    sale_price: 300.00,
  },
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    image: "",
    name: "Nike React Phantom Run Flyknit 2",
    stock_available: Math.floor(Math.random() * 50) + 1,
    regular_price: 700.00,
    sale_price: 700.00,
  },
]


function ProductListHeader() {

  const classes = useStyles();

  return (
    <div className={classes.paper} style={style.paper}>
      <Grid container alignItems="center" justifyContent="space-between" wrap="wrap" rowGap="1rem">
        <Grid item container xs={12} sm={6} md={5} wrap="wrap" justifyContent="flex-end">
          <Grid item className={classes.productName} container alignItems="center" xs={12} sm={10} >
            <Typography style={{ color: 'rgb(125, 135, 156)' }} fontSize="1.5rem">
              Name
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
          <Typography style={{ color: 'rgb(125, 135, 156)' }} fontSize="1.5rem">Stock</Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
          <Typography style={{ color: 'rgb(125, 135, 156)' }} fontSize="1.5rem">
            Regular Price
          </Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
          <Typography style={{ color: 'rgb(125, 135, 156)' }} fontSize="1.5rem">
            Sale Price
          </Typography>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={12} sm={1} md={1} xl={1}>

        </Grid>
      </Grid>
    </div>
  )
}


export function VendorProducts(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Section
      title="Products"
      icon={<BoxIcon fontSize="large" style={style.headerIcon} />}
      style={style.productList}
    >
      <Grid item xs={12} xl={11}>
        <ProductListHeader />
      </Grid>
      {
        products.map((product, index) => {
          return (
            <Grid item xs={12} xl={11}>
              <ProductItem {...product} />
            </Grid>
          )
        })
      }
    </Section>
  );
}


const style = {
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  productList: {
    rowGap: '2rem'
  } as React.CSSProperties,
  paper: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    rowGap: '3rem'
  } as React.CSSProperties
}




const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  paper: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  },
  productName: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  }
}));
