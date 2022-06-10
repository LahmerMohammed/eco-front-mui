// prettier-ignore
import { Box, Container, Grid, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { UserMenu } from '../components/user/UserMenu';

import UserRoutes from '../routes/user/UserRoutes';


interface Props {

}

export function UserPage(props: Props) {


  const { } = props;
  const classes = useStyles();

  const user = {
    firstname: 'lahmer',
    lastname: 'mohammed',
    email: 'lahmer@gmail.com',
    birthdate: new Date(),
    phonenumber: ''
  }

  return (
    <Box style={style.root}>
      <Grid container className={classes.container}>
        <Grid item container md={12} lg={3} justifyContent="flex-end" >
          <Grid item md={12} xl={8}>
            <UserMenu />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <UserRoutes />
        </Grid>
      </Grid>
    </Box>
  );
}





const style = {
  paper: {
    color: '#959dae',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  section: {
    flexDirection: 'column',
    rowGap: '0.5rem'

  } as React.CSSProperties,
  root: {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  container: {
    padding: '5rem',
    rowGap: '2rem',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      padding: '2rem'
    }
  }
}));