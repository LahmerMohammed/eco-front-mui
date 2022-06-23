import { Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import UserReview from './UserReview'


const reviews = [
  {
    rating: 4.7,date: new Date('2019-04-14'),name: 'Jannie Schumm',
    comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.'
  },
  {
    image: 'https://bazar-react.vercel.app/assets/images/faces/7.png',
    rating: 4.7,date: new Date('2022-04-14'),name: 'Jannie Schumm',
    comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.'
  },
  {
    image: 'https://bazar-react.vercel.app/assets/images/faces/7.png',
    rating: 4.7,date: new Date('2020-04-14'),name: 'Jannie Schumm',
    comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.'
  },
]

function UserReviewList() {

  const classes = useStyles();

  return (  
    <Grid container className={classes.container}>
      {
        reviews.map((review,index) => {
          return (
            <Grid item>
              <UserReview {...review}/>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default UserReviewList;

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    flexDirection: 'column',
    rowGap: '2rem'
  }
}));