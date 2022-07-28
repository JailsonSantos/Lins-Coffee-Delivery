import styled from "styled-components";
import { mobile } from '../../../../styles/responsive';

export const CoffeItemContainer = styled.div`

${mobile({ width: "90%", padding: "1rem" })};

  width: 230px;
  height: 310px;
  display: flex;
  padding: 0.3rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-direction: column;
  border-radius: 6px 36px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors["base-card"]};

  img{
    position: relative;
    margin-top: -2.5rem;
  }

  div{
    gap: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1{
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
  }

  p{
    text-align: center;
    line-height: 18.2px;
    color: ${({ theme }) => theme.colors["base-label"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }
`;

export const TypeCoffee = styled.span`
  padding: 4px 8px;   
  font-weight: 700;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-size: ${({ theme }) => theme.textSizes["components-tag"]};
  background: ${({ theme }) => theme.colors["brand-yellow-light"]};
`;

export const FooterCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaCart = styled.button`
  border: none;
  padding: 8px;
  display: flex;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-purple-dark"]};

  &:hover{
    background: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;

export const PriceCoffee = styled.span`
  width: 100%;
  font-weight: 800;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
  
  span{
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]}
  }
`;

export const AreaQuantityCoffee = styled.div`
  width: 72px;
  height: 38px;
  padding: 8px;
  margin: 0 5px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors["base-button"]};
`;

export const CoffeeButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors["brand-purple"]};

  &:hover{
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;

export const CoffeeQuantity = styled.span`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;
