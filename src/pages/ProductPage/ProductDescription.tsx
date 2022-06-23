import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props
{
  description: string;
}


function ProductDescription(/* props?: Props */) {

  const props = {description: 'Brand: Beats↵ Model: S450 Wireless Bluetooth Headset↵ FM Frequency Response: 87.5 – 108↵ MHzFeature: FM Radio, Card Supported (Micro SD / TF)↵ Made in China'}
  
  return (
    <Grid container flexDirection='column' rowGap='2rem'>
      <Grid item>
        <Typography variant='h5' fontWeight='500'>Specification: </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography style={{whiteSpace:'pre-line'}}>
          {props.description.replace(/↵/g,'\n')}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductDescription