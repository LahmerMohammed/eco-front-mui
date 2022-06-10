
import { Avatar, Chip, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  id: string;
  image: string,
  name: string,
  stock_available: number,
  regular_price: number,
  sale_price: number,
}


export function ProductItem(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  //const location = useLocation();
  const path = ""/* location.pathname */;

  return (
    <Link to={`${path}/${props.id}`} style={{ textDecoration: 'none' }}>
      <Paper elevation={0} style={style.paper} className={classes.paper}>
        <Grid container alignItems="center" justifyContent="space-between" wrap="wrap" rowGap="1rem">
          <Grid item container xs={12} sm={6} md={5} wrap="wrap">
            <Grid item container justifyContent="center" alignItems="center" xs={12} sm={2}>
              <Avatar src={props.image} style={{ backgroundColor: '#acacac' }} />
            </Grid>
            <Grid item className={classes.productName} container alignItems="center" xs={12} sm={10} >
              <Typography fontSize="18px">
                {props.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
            <Typography>{props.stock_available}</Typography>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
            <Typography fontSize="18px">
              ${props.regular_price}
            </Typography>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center" xs={12} sm={1} md={2}>
            <Typography fontSize="18px">
              ${props.sale_price}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" xs={12} sm={1} md={1} xl={1}>
            <IconButton >
              <ArrowForwardIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}

const style = {
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    cursor: 'pointer',
    padding: '10px 2rem',
    flexWrap: 'wrap' as string,
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