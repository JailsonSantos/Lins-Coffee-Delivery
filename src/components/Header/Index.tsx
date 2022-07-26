import { HeaderContainer, LocalizationButton, CartButton } from "./styles";
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home" >
        <img src={LogoCoffeeDelivery} alt="Imagem de um copo azul, cheio de café" />
      </NavLink>
      <div>
        <LocalizationButton>
          <MapPin size={22} weight="fill" />
          <span>São Luis - MA</span>
        </LocalizationButton>
        <CartButton>
          <NavLink to="/checkout" title="Checkout-Cart">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}