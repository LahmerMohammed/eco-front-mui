// prettier-ignore
import { Button, ButtonProps, Grid, Pagination, PaginationProps, styled, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  icon: React.ReactNode,
  title: string,
  button?: string,
  pagination?: PaginationProps,
  children: any,
  style?: React.CSSProperties,
  onClick?: React.MouseEventHandler
  to?: string,
  buttonStyle?: React.CSSProperties,
}


const RedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#f9e6e9',
  color: '#d23f57',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: "rgba(210, 63, 87, 0.04)",
  }
}));

export function Section(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Grid container style={style.root}>
      <Grid container item alignItems='center' rowGap="1rem" justifyContent="space-between">
        <Grid container item alignItems='center' xs={12} sm={6}>
          {props.icon}
          <Typography variant="h4" style={style.title}> {props.title} </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          {
            (props.button) ? (props.to) ? <Link to={props.to}><RedButton style={props.buttonStyle} onClick={props.onClick} fullWidth size="large" variant="contained"> {props.button} </RedButton></Link> : <RedButton style={props.buttonStyle} onClick={props.onClick} fullWidth size="large" variant="contained"> {props.button} </RedButton> : null
          }
        </Grid>
      </Grid>
      <Grid container item style={props.style} >
        {props.children}
      </Grid>
      <Grid item alignSelf="center" className={classes.content}>
        {
          (props.pagination) ? <Pagination {...props.pagination} /> : null
        }
      </Grid>
    </Grid>
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
}


const useStyles = makeStyles((theme: Theme) => createStyles({

  content: {
    [theme.breakpoints.down('md')]: {

    }
  },
}));