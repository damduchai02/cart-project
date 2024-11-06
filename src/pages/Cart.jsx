import { useSelector } from 'react-redux';
import { Box, Grid2, Typography } from '@mui/material';
import { Form, redirect } from 'react-router-dom';
import {
  CartItemsList,
  CartTotals,
  SectionTitle,
  SubmitBtn,
} from '../components';
import store from '../store';
import { customFetch } from '../utils';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

export async function action() {
  const cartData = store.getState().cart;

  try {
    await customFetch.post('/cart', cartData);
    store.dispatch(clearCart());
    toast.success('Order placed successfully');
    return redirect('/products');
  } catch (error) {
    console.log(error);
    return null;
  }
}

function Cart() {
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart === 0) return <SectionTitle text='Your cart is empty' />;

  return (
    <Box component='section' sx={{ padding: 3 }}>
      <Typography variant='h4' sx={{ paddingBottom: 3 }}>
        Shopping Cart
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <CartItemsList />
        </Grid2>
        <Grid2 size={4}>
          <Form method='POST'>
            <CartTotals />
            <SubmitBtn text='Order' />
          </Form>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Cart;
