// prettier-ignore
import { InputLabel, OutlinedInput, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';

interface InputProps {
  name: string,
  type: string,
  placeholder: string,
}


export function Input(props: InputProps) {

  const { } = props;
  const classes = useStyles();

  return (
    <>
      <InputLabel
        required
        htmlFor={props.name}
      >
        Email or Phone Number
      </InputLabel>
      <OutlinedInput
        required
        fullWidth
        id={props.name}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={`${classes.itemMargin} ${classes.text}`}
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