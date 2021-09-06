// prettier-ignore
import { Box, Container, Grid, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { UserMenu } from '../components/UserMenu';
import { UserProfile } from '../components/UserProfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
    <Router>
      <Box style={style.root}>
        <Grid container style={style.container}>
          <Grid item container md={12} lg={3} justifyContent="flex-end" >
            <Grid item md={12} xl={8}>
              <UserMenu />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Switch>
              <Route exact path="/profile" component={UserProfile} />
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </Router>
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
  container: {
    padding: '5rem',
    rowGap: '2rem',
    justifyContent: 'space-evenly'
  } as React.CSSProperties,
  root: {
    width: '100vw',
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: {

  }
}));