


import { Grid, IconButton, Paper, Rating, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
interface Props {
  imgPath: string,
  name: string,
  rating: number,
  oldPrice: number,
  discount?: number,
}

function ProductCard(props: Props) {

  const classes = useStyles();


  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container className={classes.container}>
        <Grid container item style={{ height: '300px' }} justifyContent='center' alignItems='center'>
          <img className={classes.img} src={props.imgPath} />
        </Grid>
        <Grid container item >
          <Grid item xs={8} container className={classes.info}>
            <Grid item>
              <Typography className={classes.name}>
                {props.name}
              </Typography>
            </Grid>
            <Grid item>
              <Rating value={props.rating} readOnly />
            </Grid>
            <Grid item>
              <Typography className={classes.price}>
                {`${props.oldPrice}.00$`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} container className={classes.addContainer}>
            <IconButton>
              <AddBoxOutlinedIcon htmlColor='#D23F57' fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )

}

export default ProductCard;


const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    borderRadius: '15px',
    cursor: 'pointer'
  },
  container: {
    flexDirection: 'column',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  name: {
    color: '#373F50',
    fontWeight: '600',
    lineHeight: '1.5',
    textaAlign: 'left',
    fontSize: '1rem'
  },
  info: {
    margin: '1rem 0rem 1rem 1rem',
    flexDirection: 'column',
    rowGap: '0.5rem'
  },
  price: {
    fontWeight: '600',
    color: '#D23F57',
  },
  addContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: '0.1rem ',
    marginBottom: '0.5rem'
  }
}));