import { IconButton, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IAddress } from '../../types';
import { userService } from '../../services/userService';

interface Props {
  deleteAddress: (id: string) => void;
}

export function Address(props: Partial<IAddress> & Props) {

  const { id, deleteAddress } = props;
  const classes = useStyles();


  const handleDelete = async () => {
    if (id) {
      await userService.deleteAddress(id);
      deleteAddress(id);
    }
  }

  return (
    <Paper elevation={0} style={style.paper} className={classes.paper}>
      <Typography fontSize="18px">
        {props.name}
      </Typography>

      <Typography fontSize="18px">
        {props.address_line}
      </Typography>

      <Typography fontSize="18px">
        {props.phonenumber}
      </Typography>

      <Box>
        <IconButton>
          <EditIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={handleDelete} fontSize="large" />
        </IconButton>
      </Box>
    </Paper>
  );
}

const style = {
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    cursor: 'pointer',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    flexWrap: 'wrap' as string,
    rowGap: '3rem'
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  }
}));