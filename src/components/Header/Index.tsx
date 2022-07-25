import { HeaderContainer, LocalizationButton, CartButton } from "./styles";
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="Imagem de um copo azul, cheio de café" />
      <div>
        <LocalizationButton>
          <MapPin size={22} weight="fill" />
          <span>São Luis - MA</span>
        </LocalizationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}