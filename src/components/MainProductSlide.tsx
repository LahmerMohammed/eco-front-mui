// prettier-ignore
import { Box, FormControlLabel, Paper, Switch, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useRef, useState } from 'react';
import { MainProduct } from './MainProduct';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

interface Props {

}




export function MainProductSlide(props: Props) {

  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const classes = useStyles();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box className={classes.root} >
      <Box component="div" className={classes.container}>
        <Slider {...settings}>
          <MainProduct />
          <MainProduct />
        </Slider>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4rem',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 0
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      width: '60%'
    },
    width: '90%',
    maxWidth: '1900px'
  }
}));