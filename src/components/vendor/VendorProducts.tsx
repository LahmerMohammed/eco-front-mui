// prettier-ignore
import { Grid } from '@mui/material';
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
      {
        products.map((product, index) => {
          return (
            <Grid item xs={12} lg={8}>
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
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));