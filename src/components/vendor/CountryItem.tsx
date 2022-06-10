// prettier-ignore
import { Theme } from '@mui/system';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

interface Props {
  image: string;
  name: string;
  amount: number;
  key: number;
}

export function CountryItem(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Grid key={props.key} container className={classes.container}>
      <Grid item container xs={6} sm={8} >
        <Grid item xs={6} sm={3} md={2} lg={4}>
          <Avatar src={props.image} />
        </Grid>
        <Grid item container xs={6} sm={4} lg={7} alignItems="center">
          <Typography className={classes.name} >{props.name}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={2} className={classes.amountContainer}>
        <Typography className={classes.amount}> ${props.amount} </Typography>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  img: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent'
  },
  name: {
    color: '#555c6a',
    fontSize: '1.2rem'
  },
  amount: {
    fontSize: '1.3rem',
    fontWeight: 500
  },
  amountContainer: {
    alignItems: 'center'
  },
  container: {
    justifyContent: "space-between",
  }
}));