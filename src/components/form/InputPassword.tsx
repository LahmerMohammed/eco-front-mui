// prettier-ignore
import { IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps, Theme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';

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

export function InputPassword(props: OutlinedInputProps) {

  const { } = props;
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <>
      <InputLabel
        required
        htmlFor={props.id}
      >
        {props.label}
      </InputLabel>
      <OutlinedInput
        required
        fullWidth
        className={`${classes.itemMargin} ${classes.text}`}
        type={showPassword ? "text" : "password"}
        endAdornment={<PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword} />}
        {...props}
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