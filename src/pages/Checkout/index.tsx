import { AreaAddress, AreaCart, AreaCheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <AreaCheckoutContainer>
      <AreaAddress>
        <span>Complete seu pedido</span>
      </AreaAddress>

      <AreaCart>
      </AreaCart>
      <span>Cafés selecionados</span>
    </AreaCheckoutContainer>
  )
}