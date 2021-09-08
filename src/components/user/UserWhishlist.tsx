// prettier-ignore
import { Grid, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Section } from './Section';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductCard } from '../ProductCard';


interface Props {

}


const productSample = [
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  },
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  },
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  },
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  },
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  },
  {
    discount: 25,
    imgPath: `${process.env.PUBLIC_URL}/assets/nike_black.png`,
    name: 'Nike Black',
    rating: 3,
    oldPrice: 200,
  }
]


export function UserWhishlist(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  const handleButtonClick = () => { }



  return (
    <Section
      icon={<FavoriteIcon fontSize="large" style={style.headerIcon} />}
      title="My Whish List"
      button="Add All To Cart"
      onClick={handleButtonClick}
      style={style.productList}
      buttonStyle={style.btn}
      pagination={{ count: 10, size: "large" }}
    >

      {
        productSample.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} >
              <ProductCard {...product} />
            </Grid>
          )
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
  productList: {
    rowGap: '2rem'
  } as React.CSSProperties,
  btn: {
    width: 'calc(100% - 2rem)',
    textTransform: 'none'
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));