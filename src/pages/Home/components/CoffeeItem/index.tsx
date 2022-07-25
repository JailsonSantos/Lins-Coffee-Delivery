import { ShoppingCart } from "phosphor-react";
import { AreaCart, AreaQuantityCoffee, CoffeeButton, CoffeeQuantity, CoffeItemContainer, FooterCart, PriceCoffee, TypeCoffee } from "./styles";

interface CoffeeItemProps {
  coffee: {
    id: number;
    type: string[];
    name: string;
    description: string;
    img: string;
    price: number;
  }
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <CoffeItemContainer>
      <img src={coffee.img} alt="Imagem de uma xícara de café." width="150" />
      <div>
        {
          coffee.type.map((type, index) => (
            <TypeCoffee key={index}>{type}{' '}</TypeCoffee>
          ))
        }
      </div>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>

      <FooterCart>
        <PriceCoffee><span>R$</span> {coffee.price}</PriceCoffee>
        <AreaQuantityCoffee>
          <CoffeeButton> - </CoffeeButton>
          <CoffeeQuantity>1</CoffeeQuantity>
          <CoffeeButton> + </CoffeeButton>
        </AreaQuantityCoffee>
        <AreaCart>
          <ShoppingCart size={22} weight="fill" />
        </AreaCart>
      </FooterCart>

    </CoffeItemContainer>
  )
}