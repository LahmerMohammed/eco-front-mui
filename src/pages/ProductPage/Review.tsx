import { Grid } from '@mui/material'
import React from 'react'
import ReviewForm from './ReviewForm';
import UserReviewList from './UserReviewList';

function Review() {
  return (
    <Grid container flexDirection='column' rowGap='2rem'>
      <Grid item>
        <UserReviewList/>
      </Grid>
      <Grid item>
        <ReviewForm/>
      </Grid>

    </Grid>
  )
}

export default Review;