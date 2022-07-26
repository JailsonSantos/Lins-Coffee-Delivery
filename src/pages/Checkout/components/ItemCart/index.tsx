import { Minus, Plus, Trash } from "phosphor-react";
import { AreaButtonCart, AreaQuantityCoffee, CoffeeButton, CoffeeQuantity, ImageCoffee, ItemCartContainer, PriceCoffee, TitleCoffee } from "./styles";

export function ItemCart() {
  return (
    <ItemCartContainer>
      <ImageCoffee src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Cafezinho-Caf%C3%A9-PNG-1024x927.png" alt="Xícara de Café" />
      <div>
        <TitleCoffee>Expresso Tradicional</TitleCoffee>
        <AreaButtonCart>
          <AreaQuantityCoffee>
            <button><Minus size={32} />  </button>
            <CoffeeQuantity>1</CoffeeQuantity>
            <button> <Plus size={32} /> </button>
          </AreaQuantityCoffee>
          <button>
            <Trash size={20} />
            REMOVER
          </button>
        </AreaButtonCart>
      </div>
      <PriceCoffee>RS 9,99</PriceCoffee>
    </ItemCartContainer>
  )
}