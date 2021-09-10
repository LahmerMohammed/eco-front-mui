// prettier-ignore
import { InputLabel, OutlinedInput, OutlinedInputProps, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';


export function Input(props: OutlinedInputProps) {

  const { } = props;
  const classes = useStyles();

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
        {...props}
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