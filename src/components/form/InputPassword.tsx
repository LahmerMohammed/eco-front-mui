// prettier-ignore
import { IconButton, InputAdornment, InputLabel, OutlinedInput, Theme } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';

interface Props {

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
      >
        {props.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  )
}

export function InputPassword(props: Props) {

  const { } = props;
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <>
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