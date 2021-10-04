// prettier-ignore
import { Card, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';

interface Props {
  title: string;
  amount: string;
  description: string;
}

export function VendorCard(props: Props) {

  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <Typography variant="h6" className={classes.text}>
        {props.title}
      </Typography>
      <Typography variant="h4" className={classes.amount}>
        {props.amount}
      </Typography>
      <Typography paragraph className={classes.text}>
        {props.description}
      </Typography>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    margin: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    rowGap: '1rem'
  },
  text: {
    color: "#969699"
  },
  amount: {
    color: "#4b566b",
    fontWeight: 600,
  }
}));