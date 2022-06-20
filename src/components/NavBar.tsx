// prettier-ignore
import {
  Grid,
  IconButton, Link, MenuItem,
  Select, Stack, Theme, Paper
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';
import * as React from 'react';

interface Props {

}



export function NavBar(props: Props) {

  const { } = props;
  const classes = useStyles();

  const onChange = () => { }

  const categories = ['Categories', "Fashion", "Electronics", "Bikes", "Home & Garden", "Gifts", "Music", "Health & Beauty", "Pets"];
  return (
    <div className={classes.root}>
      <Grid style={{ width: '80%' }} container className={classes.container}>
        <Grid item xs={4} md={2} style={{ textAlign: 'end' }}>
          <Select defaultValue={'Categories'} onChange={onChange} size="small">
            {categories.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </Select>
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-end" xs={7} md={5}>
          <Stack direction="row" spacing={3}>
            <Link className={classes.link}  >Home</Link>
{/*             <Link className={classes.link} >Contact</Link>
 */}            <Link className={classes.link}>About</Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}


const style = {
  link: {
    textDecoration: 'none'
  } as CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: {
    width: 'inherit',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgba(43, 52, 69, 0.1) 0px 15px 16px !important',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1,
    paddingBottom: '.5rem'
  },
  container: {
    justifyContent: 'space-between',
    maxWidth: '1900px'
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