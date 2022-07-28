import { useState } from "react";
import { useDispatch } from "react-redux";
import { Minus, Plus, Trash } from "phosphor-react";
import { addTotal, deleteProduct, minusTotal } from "../../../../redux/cartRedux";
import {
  AreaButtonCart,
  AreaQuantityCoffee,
  CoffeeButton,
  CoffeeQuantity,
  ImageCoffee,
  ItemCartContainer,
  PriceCoffee,
  TitleCoffee
} from "./styles";

interface CoffeeProps {
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

export function ItemCart({ coffee }: CoffeeProps) {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(coffee.quantityOfCoffee);

  const handleQuantity = (type: string) => {
    if (type === "desc") {
      if (quantity > 1) {
        setQuantity(quantity - 1)

        const newTotal = 1 * coffee.price

        const newCoffee = {
          id: coffee.id,
          type: coffee.type,
          name: coffee.name,
          description: coffee.description,
          img: coffee.img,
          price: coffee.price,
          quantityOfCoffee: quantity - 1
        }

        dispatch(
          minusTotal(
            {
              ...newCoffee,
              total: newTotal,
            }
          )
        );

      }
    } else {
      setQuantity(quantity + 1)

      const newTotal = 1 * coffee.price

      const newCoffee = {
        id: coffee.id,
        type: coffee.type,
        name: coffee.name,
        description: coffee.description,
        img: coffee.img,
        price: coffee.price,
        quantityOfCoffee: quantity + 1
      }

      dispatch(
        addTotal(
          {
            ...newCoffee,
            total: newTotal,
          }
        )
      );
    }
  }

  const handleDeleteCoffeeOfCart = () => {
    dispatch(
      deleteProduct(
        {
          ...coffee,
        }
      )
    );
  }

  return (
    <ItemCartContainer>
      <ImageCoffee src={coffee.img} alt="Xícara de Café" />
      <div>
        <TitleCoffee>
          {coffee?.type?.map((type, index) => (
            <span key={index}> {type}{' '}</span>
          ))}
        </TitleCoffee>
        <AreaButtonCart>
          <AreaQuantityCoffee>
            <CoffeeButton onClick={() => handleQuantity("desc")}>
              <Minus size={16} weight="bold" />
            </CoffeeButton>
            <CoffeeQuantity>{quantity}</CoffeeQuantity>
            <CoffeeButton onClick={() => handleQuantity("inc")}>
              <Plus size={16} weight="bold" />
            </CoffeeButton>
          </AreaQuantityCoffee>
          <button onClick={handleDeleteCoffeeOfCart}>
            <Trash size={20} />
            REMOVER
          </button>
        </AreaButtonCart>
      </div>
      <PriceCoffee>RS {(quantity * coffee.price).toFixed(2)}</PriceCoffee>
    </ItemCartContainer>
  )
}