

// prettier-ignore
import { Box, Button, Grid, Input, InputBase, InputBaseProps, Menu, MenuItem, Select, TextField, TextFieldProps, Theme } from '@mui/material';
import { makeStyles, createStyles, styled } from '@mui/styles';
import * as React from 'react';
import Search from '@mui/icons-material/Search';

interface Props {

}

const SearchField = styled(InputBase)<InputBaseProps>(() => ({
  height: 'inherit',
}));


export function SearchBar(props: Props) {

  const { } = props;
  const classes = useStyles();

  const categories = ['All Categories', 'Car', 'Clothes', 'Eloctronis', 'Laptop', 'Desktop', 'Camera', 'Toys'];

  return (
    <div className={classes.container}>
      <Search style={{ marginLeft: '.5rem' }} fontSize="medium" />
      <SearchField placeholder='Search for ...' fullWidth />
      <Select
        defaultValue={categories[0]}
        className={classes.select}
        size="small"
      >
        {categories.map((category, index) => <MenuItem key={index} value={category} >{category}</MenuItem>)}
      </Select>
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) => createStyles({

  container: {
    display: 'flex',
    width: 'inherit',
    alignItems: 'center',
    border: '2px solid rgba(151, 142, 142, 0.5)',
    borderRadius: '2rem',
    '&:hover': {
      borderColor: 'black'
    },
    '&:focus-within': {
      border: '1px solid #d23f57'
    },

  },
  select: {
    '& .css-1o2jng6-MuiOutlinedInput-notchedOutline ': {
      border: '0.5px solid rgba(210, 199, 199, 0.5)',
      borderRadius: '2rem',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      bottom: '-2px',
      right: '-2px',
      top: '-7px',
      left: '0px',
    },
    backgroundColor: '#f6f9fc',
    width: 145,
    textAlign: 'center',
    '&.MuiOutlinedInput-root ': {
      borderRadius: '2rem',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(210, 199, 199, 0.5)'
    }
  }
}));