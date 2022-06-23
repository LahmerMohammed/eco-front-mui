import { Box, Button, Divider, Grid, Paper, Rating, Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import { useParams } from 'react-router';
import Product from './Product';
import ProductDescription from './ProductDescription';
import Review from './Review';
import ReviewForm from './ReviewForm';
import UserReviewList from './UserReviewList';




function ProductPage() {

  // extract product-id from url
  const {id} = useParams();
  

  const classes = useStyles();

  // show = 0: display description
  // show = 1: display specification
  const [show,setShow] = React.useState(true);


  return (
    <Box component='div' className={classes.root}>
      <Box component='div' className={classes.container}>
        <Grid container flexDirection='column' rowGap='2rem'>
          <Grid item container justifyContent='center'>
            <Product/>
          </Grid>
          <Grid item container flexDirection='column'>
            <Grid item container gap='0.25rem'>
              <Grid item>
                <Button
                  variant='outlined'
                  className={classes.button}
                  onClick={() => setShow(false)}
                  >
                  Description
                </Button>
              </Grid>
            <Grid item>
                <Button
                 variant='outlined'
                 className={classes.button}
                 onClick={() => setShow(true)}
                 >
                  Review
                </Button> 
              </Grid>
            </Grid>
            <Grid item >
              <Divider />
            </Grid>
          </Grid>
          <Grid item>
            {
              show ? <Review/> : <ProductDescription/>
            }
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProductPage;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '48px',
  },
  container: {
    flex: 1 ,
    padding: '2rem',
    maxWidth: '1400px',
    [theme.breakpoints.up('md')]: {
      
    }
  },
  button: {
    color: 'rgb(210, 63, 87)',
    borderColor: 'rgb(210, 63, 87)',
    border: 'none',
    '&:hover':{
      borderBottom: '3px solid rgb(210, 63, 87)',
      border: 'none',
    },
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  }
}));