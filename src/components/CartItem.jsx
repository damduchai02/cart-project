import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { formatPrice } from '../utils';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cart/cartSlice';

function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { cartID, name, price, image, amount } = cartItem;

  function handleAmount(e) {
    const amount = parseInt(e.target.value);
    if (amount > 0) {
      dispatch(editItem({ cartID, amount }));
      toast.success('Cart updated');
    }
  }

  function removeItemFromTheCart() {
    dispatch(removeItem({ cartID }));
    toast.success('Item removed to cart');
  }

  return (
    <Card
      sx={{
        marginBottom: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CardMedia sx={{ height: 140, width: 140 }} image={image} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ textTransform: 'capitalize' }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardContent>
        <Stack spacing={1}>
          <TextField
            type='number'
            size='small'
            label='Amount'
            variant='standard'
            value={amount}
            onChange={handleAmount}
          />
          <Button type='button' onClick={removeItemFromTheCart}>
            remove
          </Button>
        </Stack>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ textTransform: 'capitalize' }}
        >
          {formatPrice(price)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CartItem;
