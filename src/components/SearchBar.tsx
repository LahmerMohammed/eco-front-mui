

// prettier-ignore
import {  Box, Button, Grid, Input, Menu, MenuItem, Select, TextField, TextFieldProps, Theme } from '@material-ui/core';
import { makeStyles , createStyles, styled } from '@material-ui/styles';
import * as React from 'react';
import Search from '@material-ui/icons/Search';

interface Props {

}

const SearchField = styled(TextField)<TextFieldProps>(() => ({
  height:'inherit',
  '& .css-1o2jng6-MuiOutlinedInput-notchedOutline ': {
    border: 'none !important'
  },
}));


export function SearchBar(props: Props) {

  const {  } = props;
  const classes = useStyles();

  const categories = ['All Categories','Car','Clothes','Eloctronis','Laptop','Desktop','Camera','Toys'];

  return (
      <div  className={classes.container}>
        <Search style={{marginLeft:'.5rem'}} fontSize="large" />
        <SearchField placeholder='Search for ...' fullWidth />
        <Select
        defaultValue={categories[0]}
        className={classes.select}
        >
          {categories.map((category) => <MenuItem value={category} >{category}</MenuItem>)}
        </Select>
      </div>
  );
}


const useStyles = makeStyles((theme: Theme) => createStyles({

  container:{
    display: 'flex',
    width: 'inherit',
    alignItems: 'center',
    border: '1px solid gray',
    borderRadius: '2rem'
  },
  select:{
    '& .css-1o2jng6-MuiOutlinedInput-notchedOutline ': {
      border: '0.5px solid whitgray',
      borderRadius: '2rem',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    backgroundColor: '#f6f9fc' ,
    minWidth: 150 ,
    textAlign:'center',
    '&.MuiOutlinedInput-root ':{
    border: '0.5px solid gray',
    borderRadius: '2rem',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    }
  }

}));