// prettier-ignore
import { IconButton, InputAdornment, InputLabel, OutlinedInput, Theme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';

interface Props {
  name?: string,
  label?: string,
}

interface AdornmentProps {
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
  showPassword: boolean,
}


function PasswordAdornment(props: AdornmentProps) {

  const handleClickShowPassword = () => {
    props.setShowPassword(!props.showPassword);
  }

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
        size="large">
        {props.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
}

export function InputPassword(props: Props) {

  const { } = props;
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <>
      <InputLabel
        required
        htmlFor={props.name ? props.name : "password"}
      >
        {props.label ? props.label : "Password"}
      </InputLabel>
      <OutlinedInput
        id={props.name ? props.name : "password"}
        required
        fullWidth
        name={props.name ? props.name : "password"}
        type={showPassword ? 'text' : 'password'}
        className={`${classes.itemMargin} ${classes.text}`}
        endAdornment={<PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword} />}
      />
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  itemMargin: {
    marginTop: '1rem !important',
    marginBottom: '1rem !important'
  },
  text: {
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {
    }
  },
}));