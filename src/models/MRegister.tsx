

// prettier-ignore
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, Modal, OutlinedInput, TextField, Theme, Typography } from '@material-ui/core';
import { createStyles , makeStyles} from '@material-ui/styles';
import * as React from 'react';
import FacebookRoundedIcon from '@material-ui/icons/FacebookRounded';
import GoogleIcon from '@material-ui/icons/Google';
import { CSSProperties } from '@material-ui/system';
import { Visibility, VisibilityOff } from '@material-ui/icons';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

interface AdornmentProps{
  setShowPassword:React.Dispatch<React.SetStateAction<boolean>>,
  showPassword: boolean,
}


function PasswordAdornment(props: AdornmentProps){

  const handleClickShowPassword = () => {
    props.setShowPassword(!props.showPassword);
  }

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return(
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
        >
          {props.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
    </InputAdornment>
  )
}


export function MRegister(props: Props) {

  const { open , setOpen } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  
  const classes = useStyles();

  return (
    <Dialog  open={open} onClose={() => setOpen(false)}>
      <DialogTitle  style={{textAlign: 'center'}}>
        <Typography variant="h4">Welcome to Ecommerce</Typography>
        <Typography style={{paddingTop: '1rem' , color: 'gray'}}>Login with email & password</Typography>
      </DialogTitle>
      <DialogContent >
        <Box component="form" sx={{mt: '1rem'}}>
          <InputLabel 
            required
            htmlFor="email"
          >
            Email or Phone Number
          </InputLabel>
          <OutlinedInput
          required
          fullWidth
          id="email"
          type="email"
          name="email"
          placeholder="example@mail.com"
          className={`${classes.itemMargin} ${classes.text}`}
        />
        <InputLabel 
          required
          htmlFor="password"
        >
          Password
        </InputLabel>
        <OutlinedInput
          id="password"
          required
          fullWidth
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          className={`${classes.itemMargin} ${classes.text}`}
          endAdornment={<PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword}/>}
        />
        <Button
        fullWidth
        style={{backgroundColor:'#d23f57',textTransform:'none'}}
        type="submit"
        className={`${classes.button} ${classes.itemMargin} ${classes.text}`}
        variant="contained"
        >
          Login
        </Button>
        </Box>
        <Divider
        style={{}}
        >
        on
        </Divider>

        <Button
        style={{backgroundColor:'#3b5998',textTransform:'none'}}
        startIcon={<FacebookRoundedIcon style={{fontSize:"2rem"}}/>}
        fullWidth
        variant="contained"
        className={`${classes.button} ${classes.itemMargin} ${classes.text}`}
        >
          Continue With Facebook
        </Button>

        <Button
        style={{backgroundColor:'#4285f4',textTransform:'none'}}
        startIcon={<GoogleIcon style={{fontSize:"2rem"}}/>}
        variant="contained"
        fullWidth
        className={`${classes.button} ${classes.itemMargin} ${classes.text}`}
        >
          Continue With Google
        </Button>

        <Box component="div" className={classes.signup}>
          <p>Don't have an Account?{" "}</p>
          <Link color="#000" href="#">Signup</Link>
        </Box>
      </DialogContent>
      <Box component="div" className={`${classes.forgetPassword} ${classes.signup}`}>
          <p>Forget your password?{" "}</p>
          <Link color="#000" href="#">Reset</Link>
      </Box>
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
  container:{
    width: 'inherit'
  },
  button:{
    color:'white !important',
  },
  itemMargin: {
    marginTop: '1rem !important' ,
    marginBottom: '1rem !important'
  },
  text:{
    fontSize: '1.25rem !important',
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{
      fontSize: '1.25rem !important',
    }
  },
  signup:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.125rem'
  },
  forgetPassword:{
    backgroundColor: '#f3f5f9',
    height: '5rem'
  }
}));
