import { Grid, GridProps, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import React from 'react'
import ProductCard from './ProductCard';


const products = [
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },
  {
    imgPath: 'https://www.pngmart.com/files/15/Picsart-Eye-Glass-PNG-Photo.png',
    name: 'Police Gray Eyeglasses',
    rating: 5,
    oldPrice: 250,
    discount: 25,
  },

]

interface Props {
  loading: Boolean;
  productList: Array<any>;
}
function ProductList(props: Props) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {
        products.map((product, index) => {
          return (
            <Grid key={index} item xs={12} md={5.7} lg={3.7}>
              <ProductCard {...product} />
            </Grid>
          )
        })
      }
    </Grid>
  );

}

export default ProductList;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    rowGap: '2rem',
    gap: '2rem'
  },

}));