// prettier-ignore
import { Button, ButtonProps, Theme } from '@mui/material';
import { createStyles, makeStyles, styled } from '@mui/styles';
import * as React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

const FormButton = styled(Button)<ButtonProps>(({ theme: Theme }) => ({
  color: 'white',
  marginTop: '1rem !important',
  marginBottom: '1rem !important',
  textTransform: 'none',
  fontSize: '16px !important',
  '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {}
}));


export const ActionButton = (props: any) => {


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

export const GoogleButton = (props: any) => {
  return (
    <ActionButton
      startIcon={<GoogleIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#4285f4' }}
    >
      Continue With Google
    </ActionButton>
  )
}


export const FacebookButton = (props: any) => {
  return (
    <ActionButton
      startIcon={<FacebookRoundedIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#3b5998' }}
    >
      Continue With Facebook
    </ActionButton>
  )
}
