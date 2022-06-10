// prettier-ignore
import { Box, Button, Grid, IconButton, Paper, Theme, Typography, TypographyProps } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Section } from './Section';
import { Order, ORDER_STATUS } from './Order';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


interface Props { }



const orderExamples = [
  {
    order_id: "1265172",
    status: ORDER_STATUS.pending,
    date: new Date(),
    toral_price: 350,
  },
  {
    order_id: "1265170",
    status: ORDER_STATUS.cancelled,
    date: new Date(),
    toral_price: 350,
  },
  {
    order_id: "1265171",
    status: ORDER_STATUS.processing,
    date: new Date(),
    toral_price: 350,
  },
  {
    order_id: "1265173",
    status: ORDER_STATUS.delivered,
    date: new Date(),
    toral_price: 350,
  }

]


function OrderHeader() {

  const classes = useStyles();

  return (
    <Grid container style={style.header} className={classes.header}>
      <Grid item xs={3}>
        <Typography style={{ color: 'gray' }} fontSize='1.5rem' >Order #</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography style={{ color: 'gray' }} fontSize='1.5rem'>Status</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={{ color: 'gray' }} fontSize='1.5rem'>Date Purshased</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography style={{ color: 'gray' }} fontSize='1.5rem' >Total</Typography>
      </Grid>

    </Grid>
  )

}

export function UserOrder(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Section

      icon={<ShoppingBagIcon fontSize="large" style={style.headerIcon} />}
      title="My Orders"
      style={style.orderList}
    >
      <Grid item xs={12}>
        <OrderHeader />
      </Grid>
      {
        orderExamples.map((order, index) => {
          return (
            <Grid key={index} item xs={12}>
              <Order {...order} />
            </Grid>)
        })
      }

    </Section>
  );
}

const style = {
  root: {
    flexDirection: "column",
    rowGap: "2rem"
  } as React.CSSProperties,
  title: {
    marginLeft: '1.5rem',
    fontWeight: '1000' as string,
    color: '#2b3445'
  } as React.CSSProperties,
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  orderList: {
    rowGap: '2rem'
  } as React.CSSProperties,
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    flexWrap: 'wrap' as string,
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  header: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  }
}));
