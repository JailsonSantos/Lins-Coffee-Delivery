import styled from "styled-components";


export const CoffeItemContainer = styled.div`
  width: 230px;
  height: 310px;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  img{
    position: relative;
    margin-top: -2.5rem;
  }

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
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
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]}
  }
`;

export const TypeCoffee = styled.span`
  background: ${({ theme }) => theme.colors["brand-yellow-light"]};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  border-radius: 50px;
  padding: 4px 8px;   
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes["components-tag"]};
`;

export const FooterCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 8px;
  display: flex;
  border-radius: 6px;
  border: none;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors["brand-purple-dark"]};
  color: ${({ theme }) => theme.colors["base-white"]};
`;

export const PriceCoffee = styled.span`
  width: 100%;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 800;
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
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors["base-button"]};
`;

export const CoffeeButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors["brand-purple"]};
`;

export const CoffeeQuantity = styled.span`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;
