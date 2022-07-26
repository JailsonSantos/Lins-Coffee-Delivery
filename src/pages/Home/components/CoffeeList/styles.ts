import styled from "styled-components";
import { mobile, tablet, notebook } from "../../../../styles/responsive";

export const CoffeListController = styled.div``;

export const TitleCoffee = styled.h1`
  margin: 1.5rem 0;

  ${tablet({ margin: '0' })};
  ${mobile({ margin: '1.2rem 0' })};
`;

export const AreaCoffeeItem = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  
  ${notebook({ padding: '2rem 5rem' })};
  ${tablet({ padding: '2rem 0', justifyContent: 'center' })};
  ${mobile({ padding: '2rem 0', justifyContent: 'center' })};
`;