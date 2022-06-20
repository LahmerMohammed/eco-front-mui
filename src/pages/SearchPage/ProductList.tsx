import { Grid, GridProps, Skeleton, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import React from 'react'
import ProductCard from './ProductCard';



interface Props {
  loading: Boolean;
  productList: Array<any>;
}


function ProductList(props: Props) {

  const classes = useStyles();

  const { productList , loading} = props;

  return (
    <Grid container className={classes.root}>
      {
        !loading ? productList.map((product, index) => {
          return (
            <Grid key={index} item xs={12} md={5.7} lg={3.7}>
              <ProductCard {...product} />
            </Grid>
          )
        }) : [1,2,3,4,5,6,7,8,9].map((skeleton,index) => {
          return (
            <Grid key={index} item xs={12} md={5.7} lg={3.7}>
              <ProductCardSkeleton />
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



function ProductCardSkeleton()
{
  return (
    <>
      <Skeleton variant='rectangular' height={200}/>
      <Skeleton variant='text' height={35}/>
      <Skeleton variant='text' height={35}/>
    </>
  )
}