import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartButton() {
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  return (
    <NavLink to='cart'>
      <Badge badgeContent={numItemsInCart} color='primary' showZero>
        <ShoppingCartOutlinedIcon color='action' />
      </Badge>
    </NavLink>
  );
}

export default CartButton;
