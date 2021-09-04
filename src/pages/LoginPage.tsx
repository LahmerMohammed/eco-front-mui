import { Box, Container, Divider, Link, Paper, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { ActionButton, FacebookButton, GoogleButton } from '../components/form/FormButton';
import { Input } from '../components/form/Input';
import { InputPassword } from '../components/form/InputPassword';
import { ForgetPassword } from '../models/MRegister';

interface Props {

}

export function LoginPage(props: Props) {

  const { } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root} >
      <Paper elevation={3} className={classes.container}>
        <Box component="form">

          <Input name="Email" type="email" placeholder="example@gmail.com" />
          <InputPassword />
          <ActionButton
            style={{ backgroundColor: '#d23f57' }}
            type="submit"

          >
            Login
          </ActionButton>
        </Box>
        <Divider
        >
          on
        </Divider>
        <FacebookButton />
        <GoogleButton />
        <Box component="div" className={classes.signup}>
          <p>Don't have an Account?{" "}</p>
          <Link color="#000" href="#">Signup</Link>
        </Box>
        <ForgetPassword />
      </Paper>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: '2rem',
  },
  signup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));