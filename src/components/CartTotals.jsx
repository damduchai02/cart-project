import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';
import { Card, CardContent, Stack, Typography } from '@mui/material';

function CartTotals() {
  const { cartTotal, tax, orderTotal } = useSelector((state) => state.cart);

  return (
    <Card sx={{ width: 350, padding: 2, marginBottom: 2 }}>
      <CardContent>
        <Stack
          direction='row'
          spacing={2}
          sx={{ justifyContent: 'space-between', paddingY: 1, borderBottom: 1 }}
        >
          <Typography gutterBottom component='div'>
            Subtotal
          </Typography>
          <Typography gutterBottom component='div'>
            {formatPrice(cartTotal)}
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          sx={{ justifyContent: 'space-between', paddingY: 1, borderBottom: 1 }}
        >
          <Typography gutterBottom component='div'>
            Tax
          </Typography>
          <Typography gutterBottom component='div'>
            {formatPrice(tax)}
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          sx={{ justifyContent: 'space-between', paddingY: 3 }}
        >
          <Typography gutterBottom variant='h5' component='div'>
            Order Total
          </Typography>
          <Typography gutterBottom component='div'>
            {formatPrice(orderTotal)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CartTotals;
