// prettier-ignore
import { Box, Grid, Theme } from '@mui/material';
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
          <Grid item md={12} lg={2} >
            <UserMenu />
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
    width: '300px',
  } as React.CSSProperties,
  section: {
    flexDirection: 'column',
    rowGap: '0.5rem'

  } as React.CSSProperties,
  container: {
    padding: '2rem',
    wrap: "wrap",
    rowGap: '2rem'
  } as React.CSSProperties,
  root: {
    width: '100vw',
    backgroundColor: 'inherit',
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: {

  }
}));