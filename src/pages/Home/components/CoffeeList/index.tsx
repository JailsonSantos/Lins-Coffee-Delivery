import { CoffeeItem } from "../CoffeeItem";
import { AreaCoffeeItem, CoffeListController, TitleCoffee } from "./styles";

import { data } from "../../../../data/serverFake";

export function CoffeeList() {
  //Dados API FAKE
  const { coffees } = data;

  return (
    <CoffeListController>
      <TitleCoffee>Nossos cafés</TitleCoffee>
      <AreaCoffeeItem>
        {coffees.map(coffee => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </AreaCoffeeItem>
    </CoffeListController>
  )
}