// prettier-ignore
import { InputLabel, OutlinedInput, OutlinedInputProps, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';

interface InputProps {
  name: string,
  type: string,
  placeholder?: string,
  label?: string,
}


export function Input(props: InputProps & OutlinedInputProps) {

  const { } = props;
  const classes = useStyles();

  return (
    <>
      <InputLabel
        required
        htmlFor={props.label}
      >
        {props.label}
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