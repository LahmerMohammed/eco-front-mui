// prettier-ignore
import { Card, Chip, Grid, Paper, Theme, Typography , Rating, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';

export interface ProductProps {
  discount: number;
  imgPath: string;
  name: string;
  rating: number;
  oldPrice: number;
}




const getNewPrice = (price: number , discount_perc: number) : number => price*discount_perc/100;

export function ProductCard(props: ProductProps) {

  const {  } = props;
  const classes = useStyles();

  return (
    <Paper style={style.paper} elevation={0}>
      <Link href="#">
        <div className="chip">
          <Chip label={`${props.discount}% off`} style={style.chip}/>
        </div>
        <div className="img">
          <img className={classes.img} src={props.imgPath}/>
        </div>
      </Link>
      <Grid >
        <Grid item container direction="column" rowGap={.5} style={{padding: '1rem'}}>
          <Grid item >
            <Typography>{props.name}</Typography>
          </Grid>
          <Grid item >
            <Rating  value={props.rating} readOnly />
          </Grid>
          <Grid item container spacing={2} style={{height: '2rem'}}>
            <Grid item>
              <Typography paragraph fontSize="1.25rem" style={{color: '#d23f57'}}>$187.00</Typography>
            </Grid>
            <Grid item>
              <Typography component="del" fontSize="1.25rem" style={{color:'rgb(125, 135, 156)'}}>$200.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    
  );
}

const style = {
  chip: {
    marginTop: '.5rem',
    marginLeft: '.5rem',
    backgroundColor: '#d23f57' ,
    color: 'white',
  },
  paper: {
    width: 'calc(100% - 2rem)',
    borderRadiu: '15px'
  }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  imgWrap: {},
  
  img:{
    width: '-moz-available'
  }
}));