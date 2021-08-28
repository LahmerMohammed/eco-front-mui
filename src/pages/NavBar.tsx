// prettier-ignore
import { Grid, IconButton, Link, MenuItem, Select, Stack, Theme , Paper} from '@material-ui/core';
import {makeStyles, createStyles } from '@material-ui/styles';
import { CSSProperties } from '@material-ui/system';
import * as React from 'react';

interface Props {

}



export function NavBar(props: Props) {

const {  } = props;
const classes = useStyles();

const onChange = () => {}

const categories = ['Categories',"Fashion","Electronics","Bikes","Home & Garden","Gifts","Music","Health & Beauty","Pets"];
  return (
    <div className={classes.root}>
      <Grid style={{width: '80%'}} container  className={classes.container}>
        <Grid item xs={2}>
          <Select
          defaultValue={'Categories'}
          onChange={onChange}
          >
            {categories.map((item) => <MenuItem value={item}>{item}</MenuItem>)}   
          </Select>
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-end" xs={5}>
          <Stack direction="row"  spacing={3}>
            <Link  className={classes.link}  >Home</Link>
            <Link  className={classes.link} >Contact</Link>
            <Link  className={classes.link}>About</Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
);
}


const style = {
  link: {
    textDecoration: 'none'
  }as CSSProperties,
}

const useStyles = makeStyles( (theme: Theme) => createStyles({

  root: {
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 10px 16px rgba(43, 52, 69, 0.1) !important'
  },
  container:{
    justifyContent: 'space-between',
  },
  link: {
    color: '#2B3445 !important',
    '&:hover': {
      color: '#D23F57 !important'
    },
    cursor: 'pointer',
    textDecoration: 'none !important',
    
  }
}));