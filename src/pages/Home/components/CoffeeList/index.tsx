import { CoffeeItem } from "../CoffeeItem";
import { AreaCoffeeItem } from "./styles";

import { data } from "../../../../data/serverFake";

export function CoffeeList() {

  const { coffees } = data;

  console.log(coffees);

  return (<>
    <h1>Nossos cafés</h1>
    <AreaCoffeeItem>
      {coffees.map(coffee => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
    </AreaCoffeeItem>
  </>
  )
}