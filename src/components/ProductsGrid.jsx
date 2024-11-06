import {
  Grid2,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../utils';
import SignInButton from './SignInButton';
import { addItem } from '../features/cart/cartSlice';
import AddToCartBtn from './AddToCartBtn';

function ProductGrid() {
  const { isAuthenticated } = useAuth0();
  const products = useLoaderData();

  return (
    <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {products.map((product) => {
        const { id, name, price, image } = product;

        return (
          <Card key={id} sx={{ width: 365 }}>
            <CardMedia sx={{ height: 140 }} image={image} title={name} />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{ textTransform: 'capitalize' }}
              >
                {name}
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {formatPrice(price)}
              </Typography>
            </CardContent>
            <CardActions>
              {isAuthenticated ? (
                <AddToCartBtn product={product} />
              ) : (
                <SignInButton text='Please Login' />
              )}
            </CardActions>
          </Card>
        );
      })}
    </Grid2>
  );
}

export default ProductGrid;
