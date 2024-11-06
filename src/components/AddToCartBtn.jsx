import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

function AddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const { id, name, price, image } = product;
  function addToCart() {
    const cartProduct = {
      cartID: id + name,
      productID: id,
      name,
      price,
      image,
      amount: 1,
    };
    dispatch(addItem({ product: cartProduct }));
    toast.success('Item added to cart');
  }
  return (
    <Button type='button' size='small' onClick={addToCart}>
      Add To Cart
    </Button>
  );
}

export default AddToCartBtn;
