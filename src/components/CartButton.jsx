import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartButton() {
  const { isAuthenticated } = useAuth0();
  const { numItemsInCart } = useSelector((state) => state.cart);

  return (
    isAuthenticated && (
      <NavLink to='cart'>
        <Badge badgeContent={numItemsInCart} color='primary' showZero>
          <ShoppingCartOutlinedIcon color='action' />
        </Badge>
      </NavLink>
    )
  );
}

export default CartButton;
