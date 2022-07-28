import { HeaderContainer, LocalizationButton, CartButton } from "./styles";
import LogoCoffeeDelivery from '../../assets/logocoffeedelivery.svg';
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/apiCalls";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    top: -5,
    right: -5,
    padding: '4px 2px',
    color: '#ffffff',
    backgroundColor: '#C47F17',
    border: '2px solid #C47F17',
  },
}));

export function Header() {

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const quantity = cart.quantity;

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home" >
        <img src={LogoCoffeeDelivery} alt="Imagem de um copo azul, cheio de café" />
      </NavLink>
      <div>
        <LocalizationButton onClick={() => clearCart(dispatch)}>
          <MapPin size={22} weight="fill" />
          <span>São Luis - MA</span>
        </LocalizationButton>
        <CartButton>
          <NavLink to="/checkout" title="Checkout-Cart">
            <StyledBadge badgeContent={quantity} >
              <ShoppingCart size={22} weight="fill" />
            </StyledBadge>
          </NavLink>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}