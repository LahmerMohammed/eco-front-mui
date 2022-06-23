import { LoadingButton } from '@mui/lab';
import { Box, Grid, Rating, TextField, Theme, Typography } from '@mui/material';
import { makeStyles,createStyles } from '@mui/styles';
import React from 'react'


// TODO: change commend TextField color to red on-hover & on-focus 

function ReviewForm() {


  const  [form,setForm] = React.useState({
    rating: 0,
    comment: '',
  });

  const [disable,setDisable] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = evt.target;

    value.replace(/↵/g, "\n");

    setForm({
      ...form,
      [name]: value.trim()
    });
    if((!value || value.match('/^\s*$/')))
    {
      setDisable(true);
    }else{
      setDisable(false);
    }
  }

  const handleRatingChange = (evt: any,newValue: number | null) => {
    setForm({
      ...form,
      rating: newValue || 0
    })
  }

  const handleSubmit = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    // set loading=true

    // post form

    // set loading=false
  }
  const classes = useStyles();
  return (
    <Box component='div' className={classes.container}>
      <Typography fontSize='2rem'>
        Write a Review for this product
      </Typography>
      <form>
        <Grid container flexDirection='column' rowGap='2rem'>  
          <Grid item container flexDirection='column'rowGap='0.5rem'>
            <Grid item>
              <Typography variant='h6'>Your Rating <span style={{color: 'red'}}>*</span></Typography>
            </Grid>
            <Grid item>
              <Rating
                value={form.rating}
                onChange={handleRatingChange}
                precision={0.5}
                name='rating'
                defaultValue={0}
                size='large'
              />
            </Grid>
          </Grid>
          <Grid item container flexDirection='column' rowGap='0.5rem'>
            <Grid item>
              <Typography variant='h6'>Your Review <span style={{color: 'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.comment}
                name='comment'
                onChange={handleInputChange}
                multiline
                rows={5}
                fullWidth
                placeholder='Write a review here ...'
                required
                className={classes.comment}
              />
            </Grid>
          </Grid>
          <Grid item>
            <LoadingButton
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              className={classes.submitBtn}
              disabled={disable}
              loading={loading}
            >
                Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
            
  )
}

export default ReviewForm;

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap:'2rem',
  },
  submitBtn:{
    backgroundColor: 'rgb(210, 63, 87)',
    whiteSpace: 'nowrap',
    '&:hover':{
      backgroundColor: 'rgb(210, 63, 87)',
    }
  },
  comment: {
    '&:focus':{
      borderColor: 'rgb(210, 63, 87)'
    },
    '&:hover':{
      borderColor: 'rgb(210, 63, 87)'
    },
  }
}))