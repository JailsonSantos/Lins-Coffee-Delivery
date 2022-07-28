import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import {
  AreaCart,
  AreaQuantityCoffee,
  CoffeeButton,
  CoffeeQuantity,
  CoffeItemContainer,
  FooterCart,
  PriceCoffee,
  TypeCoffee
} from "./styles";


interface CoffeeItemProps {
  coffee: {
    id: string;
    type: string[];
    name: string;
    description: string;
    img: string;
    price: number;
    quantityOfCoffee: number;
  }
}

import { addProduct } from '../../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

export function CoffeeItem({ coffee }: CoffeeItemProps) {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: string) => {
    if (type === "desc") {
      quantity > 1 && setQuantity(quantity - 1)
    } else (
      setQuantity(quantity + 1)
    )
  }

  // UPDATED CART
  const handleClickCart = () => {
    const priceFormatted = Number(coffee.price);
    const total = quantity * priceFormatted;

    const newCoffee = {
      id: coffee.id,
      type: coffee.type,
      name: coffee.name,
      description: coffee.description,
      img: coffee.img,
      price: coffee.price,
      quantityOfCoffee: quantity
    }

    dispatch(
      addProduct(
        {
          ...newCoffee,
          quantity,
          total,
        }
      )
    );
  };

  return (
    <CoffeItemContainer>
      <img src={coffee.img} alt="Imagem de uma xícara de café." width="140" height="130" />
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
          <CoffeeButton onClick={() => handleQuantity("desc")}>
            <Minus size={32} weight="bold" />
          </CoffeeButton>
          <CoffeeQuantity>{quantity}</CoffeeQuantity>
          <CoffeeButton onClick={() => handleQuantity("inc")}>
            <Plus size={32} weight="bold" />
          </CoffeeButton>
        </AreaQuantityCoffee>
        <AreaCart onClick={handleClickCart}>
          <ShoppingCart size={22} weight="fill" />
        </AreaCart>
      </FooterCart>

    </CoffeItemContainer>
  )
}