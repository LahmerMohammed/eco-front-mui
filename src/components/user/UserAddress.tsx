// prettier-ignore
import { Button, Grid, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Address } from './Address';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Pagination from '@mui/material/Pagination';
import { Section } from './Section';
import { IAddress } from '../../types';
import { userService } from '../../services/userService';


interface Props {

}

const addressExamples = [
  {
    fullname: 'Lahmer Mohammed',
    address: '8 may 1945 sobha Chlef',
    phonenumber: '+213551480955'
  },
  {
    fullname: 'Lahmer Mohammed',
    address: '8 may 1945 sobha Chlef',
    phonenumber: '+213551480955'
  },
  {
    fullname: 'Lahmer Mohammed',
    address: '8 may 1945 sobha Chlef',
    phonenumber: '+213551480955'
  },
  {
    fullname: 'Lahmer Mohammed',
    address: '8 may 1945 sobha Chlef',
    phonenumber: '+213551480955'
  },
  {
    fullname: 'Lahmer Mohammed',
    address: '8 may 1945 sobha Chlef',
    phonenumber: '+213551480955'
  }

]

export function UserAddress(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  const [addresses, setAddresses] = React.useState<Partial<IAddress[]>>([] as IAddress[]);

  React.useEffect(() => {

    const fetchData = async () => {
      const response = await userService.getAddresses();

      if ('error' in response) {
      } else {
        setAddresses(response);
      }
      console.log(response);
    }

    fetchData();

  }, []);

  const deleteAddress = (address_id: string) => {
    const temp = addresses.filter((address) => address?.id != address_id);

    setAddresses(temp);
  }

  return (
    <Section

      icon={<LocationOnIcon fontSize="large" style={style.headerIcon} />}
      title="My Addresses"
      button="add new Address"
      style={style.addressList}
      to="/user/address/add"

    >
      {
        addresses.map((address, index) => {
          return (
            <Grid item key={index} xs={12}>
              <Address deleteAddress={deleteAddress} {...address} />
            </Grid>)
        })
      }

    </Section>
  );
}

const style = {
  root: {
    flexDirection: "column",
    rowGap: "2rem"
  } as React.CSSProperties,
  title: {
    marginLeft: '1.5rem',
    fontWeight: '1000' as string,
    color: '#2b3445'
  } as React.CSSProperties,
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  addressList: {
    rowGap: '2rem'
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));


/*
   <Grid container style={style.root}>
     <Grid container item alignItems='center' >
       <Grid container item alignItems='center' xs={6} justifyContent="space-between">
         <LocationOnIcon fontSize="large" style={style.headerIcon} />
         <Typography variant="h4" style={style.title}>
           My Addresses
         </Typography>
       </Grid>
       <Grid item>
         <Button size="large" variant="contained">
           Add new Address
         </Button>
       </Grid>
     </Grid>
     <Grid container item style={style.addressList}>
       {
         addressExamples.map((address, index) => {
           return (
             <Grid item xs={12}>
               <Address {...address} />
             </Grid>)
         })
       }
     </Grid>
     <Grid item alignSelf="center">
       <Pagination count={10} variant="outlined" color="secondary" size="large" />
     </Grid>
   </Grid>*/