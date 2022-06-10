// prettier-ignore
import { Button, ButtonProps, Theme } from '@mui/material';
import { createStyles, makeStyles, styled } from '@mui/styles';
import * as React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

const FormButton = styled(LoadingButton)<LoadingButtonProps>(({ theme: Theme }) => ({
  color: 'white',
  marginTop: '1rem !important',
  marginBottom: '1rem !important',
  textTransform: 'none',
  fontSize: '16px !important',
  '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {}
}));



export const ActionButton = (props: LoadingButtonProps) => {



  return (
    <FormButton
      variant="contained"
      fullWidth
      {...props}
    >
      {props.children}
    </FormButton>
  )
}

export const GoogleButton = (props: LoadingButtonProps) => {
  return (
    <ActionButton
      startIcon={<GoogleIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#4285f4' }}
      {...props}
    >
      Continue With Google
    </ActionButton>
  )
}


export const FacebookButton = (props: LoadingButtonProps) => {
  return (
    <ActionButton
      startIcon={<FacebookRoundedIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#3b5998' }}
      {...props}

    >
      Continue With Facebook
    </ActionButton>
  )
}
