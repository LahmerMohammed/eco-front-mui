

// prettier-ignore
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Link, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Input } from '../components/shared/Input'
import { InputPassword } from '../components/shared/InputPassword'
import { ActionButton, FacebookButton, GoogleButton } from '../components/shared/FormButton';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


export function ForgetPassword() {

  const classes = useStyles();

  return (
    <Box component="div" className={`${classes.forgetPassword} ${classes.signup}`}>
      <p>Forget your password?{" "}</p>
      <Link color="#000" href="#">Reset</Link>
    </Box>
  )
}


export function MRegister(props: Props) {

  const { open, setOpen } = props;
  const classes = useStyles();

  const handleRegister = () => { }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle style={{ textAlign: 'center' }}>
        <Typography variant="h4">Welcome to Ecommerce</Typography>
        <Typography style={{ paddingTop: '1rem', color: 'gray' }}>Login with email & password</Typography>
      </DialogTitle>
      <DialogContent style={{ overflowY: 'hidden' }}>

        <Box component="form" sx={{ mt: '1rem' }}>

          <Input
            name="Email"
            type="email"
            placeholder="example@gmail.com"
            label="Email or Phone Number"
          />
          <InputPassword label="Password" />
          <ActionButton
            style={{ backgroundColor: '#d23f57' }}

            onClick={handleRegister}
          >
            Signup
          </ActionButton>
        </Box>
        <Divider
        >
          on
        </Divider>
        <FacebookButton onClick={() => { }} />
        <GoogleButton onClick={() => { }} />
        <Box component="div" className={classes.signup}>
          <p>Don't have an Account?{" "}</p>
          <Link color="#000" href="#">Signup</Link>
        </Box>
      </DialogContent>
      <ForgetPassword />
    </Dialog>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'inherit',
    bgcolor: 'white',
    border: '2px solid #fff',
    boxShadow: '24',
    p: 4
  },
  container: {
    width: 'inherit'
  },
  button: {
    color: 'white !important',
  },
  itemMargin: {
    marginTop: '1rem !important',
    marginBottom: '1rem !important'
  },
  text: {
    fontSize: '1.25rem !important',
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {
      fontSize: '1.25rem !important',
    }
  },
  signup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetPassword: {
    backgroundColor: '#f3f5f9',
    height: '5rem'
  }
}));
