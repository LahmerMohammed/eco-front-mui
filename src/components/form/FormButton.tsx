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



interface SocialButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export const ActionButton = (props: ButtonProps) => {


  return (
    <FormButton
      variant="contained"
      fullWidth
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </FormButton>
  )
}

export const GoogleButton = (props: SocialButtonProps) => {
  return (
    <ActionButton
      startIcon={<GoogleIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#4285f4' }}
      onClick={props.onClick}
    >
      Continue With Google
    </ActionButton>
  )
}


export const FacebookButton = (props: SocialButtonProps) => {
  return (
    <ActionButton
      startIcon={<FacebookRoundedIcon style={{ fontSize: "1.5rem" }} />}
      style={{ backgroundColor: '#3b5998' }}
      onClick={props.onClick}

    >
      Continue With Facebook
    </ActionButton>
  )
}
