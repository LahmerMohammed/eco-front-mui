


import { Grid, IconButton, Link, Paper, Rating, Theme, Tooltip, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
interface Props {
  image: any,
  name: string,
  rating: number,
  sale_price: number,
  regular_price: number,
}


function ProductCard(props: Props) {

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container className={classes.container}>
        <Link href="#" className={classes.imgContainer}>
          <Grid container item className={classes.imgWrapper} >
            <img className={classes.img} src={props.image} />
          </Grid>
        </Link>
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
                {`${props.sale_price}.00$`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} container className={classes.addContainer}>
            <Tooltip title='Add to favotite' >
              <IconButton>
                <AddBoxOutlinedIcon htmlColor='#D23F57' fontSize='large' />
              </IconButton>
            </Tooltip>
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
    cursor: 'pointer',
    height: '100%'
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  img: {
    maxWidth: '100%',
    maxHeight: '70%',
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
    marginBottom: '0.5rem',

  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px'
  }
}));