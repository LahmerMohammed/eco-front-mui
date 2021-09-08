import { Chip, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  order_id: string,
  status: ORDER_STATUS,
  date: Date,
  toral_price: number,

}

export enum ORDER_STATUS {
  pending = "pending",
  processing = "processing",
  delivered = "delivered",
  cancelled = "cancelled"
}


function OrderStatus(props: { status: ORDER_STATUS }) {


  switch (props.status) {
    case ORDER_STATUS.cancelled: {
      return <Chip size="medium" style={{ fontSize: '16px' }} label={props.status} color="error" />
    }
    case ORDER_STATUS.delivered: {
      return <Chip size="medium" style={{ fontSize: '16px' }} label={props.status} color="success" />
    }

    default: {
      return <Chip size="medium" style={{ fontSize: '16px' }} label={props.status} />
    }
  }

}

export function Order(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Paper elevation={0} style={style.paper} className={classes.paper}>
      <Grid container alignItems="center">
        <Grid item md={3}>
          <Typography fontSize="18px">
            {props.order_id}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <OrderStatus status={props.status} />

        </Grid>
        <Grid item md={4}>
          <Typography fontSize="18px">
            {props.date.toISOString()}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography fontSize="18px">
            ${props.toral_price.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item md={1}>
          <IconButton>
            <ArrowForwardIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
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
    paddingLeft: '2rem',
    paddingRight: '2rem',
    flexWrap: 'wrap' as string,
    rowGap: '3rem'
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  paper: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  }
}));