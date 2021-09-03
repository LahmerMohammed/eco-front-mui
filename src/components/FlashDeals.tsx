// prettier-ignore
import {  Container, Grid, Theme, Typography } from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/styles'
import * as React from 'react';
import { ProductCard, ProductProps } from './ProductCard';
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@material-ui/system';
import { ElectricityIcon } from '../icons/ElectricityIcon';


interface Props {

}

const muibreakpoints = {

  xs:0,
  sm:600,
  md:900,
  lg:1200,
  xl:1536
}

const productSample : ProductProps = {
  discount: 25,
  imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
  name: 'Nike Black',
  rating: 3,
  oldPrice: 200,
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: muibreakpoints.lg,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: muibreakpoints.md,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: muibreakpoints.sm,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}; 

export function FlashDeals(props: Props) {

  const { } = props;
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Box component="div" className={classes.title}>
        <ElectricityIcon style={{color: '#d23f57' , marginRight: '1rem'}}  fontSize="large" />
        <Typography variant="h4"  fontWeight="500" fontSize="2.125rem">Flash Deals</Typography>
      </Box>
      <Box component="div" className={classes.container}>
        <Slider {...settings}>
          <ProductCard {...productSample}/>
          <ProductCard {...productSample}/>
          <ProductCard {...productSample}/>
          <ProductCard {...productSample}/>
          <ProductCard {...productSample}/>
          <ProductCard {...productSample}/>
        </Slider>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#f6f9fc",
    paddingTop: '4rem',
    paddingBottom: '4rem',

  },
  container: {
    width: '75% !important',
    marginTop: '2rem',
    marginBottom: '2rem',
    maxWidth:'1900px',
  },
  title: {
    display: 'flex',
    marginBottom: '2rem',
    width: '75%',
  }
}));