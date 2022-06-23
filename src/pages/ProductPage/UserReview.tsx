import { Avatar, Box, Grid, Rating, Theme, Typography } from '@mui/material'
import { createStyles , makeStyles} from '@mui/styles';
import React from 'react'


interface Props {
  image?: string;
  date: Date;
  comment: string;
  name: string;
  rating: number
}


function diffDate(d1: Date,d2: Date) : string
{
    const diffs : any = 
    { 
        second: 0,minute: 0,  hour: 0,
        day: 0,  month: 0,  year: 0 ,
        key: function(n: number) {
            return this[Object.keys(this)[n]];
        }
    }
    
    const diff = Math.floor(d2.valueOf() - d1.valueOf());
    const values = [1000,60,60,24,30,12];
    
    diffs['second'] = Number((diff / values[0]).toFixed(1));

    Object.keys(diffs).forEach((key,index) => {
        if( index === 0)
            return;
        diffs[key] = Number((diffs.key(index-1) / values[index]).toFixed(1));
    });
    
    let result = '';
    Object.keys(diffs).reverse().slice(1).some(key => {
        if( diffs[key] >= 1)
        {
            result = `${diffs[key]} ${key}`;
            result = diffs[key] > 1 ? result + 's' : result;
            return true;
        }
    });

    return result;
}

function UserReview(props: Props) {

  const classes = useStyles();
  return (
    <Grid container flexDirection='column' rowGap='0.5rem'>
      <Grid container item>
        <Grid item md={0.75}>
          <Avatar
            src={props.image}
            alt={props.name}
            sx={{width: 50,height: 50}}
          >
            {props.image ? null : props.name.slice(0,2).toUpperCase() }
          </Avatar>
        </Grid>
        <Grid container item md={4} flexDirection='column'>
          <Grid item>
            <Typography className={classes.bold}>{props.name}</Typography>
          </Grid>
          <Grid container item gap='1rem'>
            <Rating readOnly value={props.rating}/>
            <Typography className={classes.bold}>{props.rating}</Typography>
            <Typography>{`${diffDate(props.date,new Date())} ago`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Typography>{props.comment}</Typography>
      </Grid>
    </Grid>
  )
}

export default UserReview;

const useStyles = makeStyles((theme: Theme) => createStyles({
  bold: {
    fontWeight: '500'
  }
}));