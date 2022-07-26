import styled from 'styled-components';


export const ItemCartContainer = styled.div`
  display: flex;
  width: 368px;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
`;

export const TitleCoffee = styled.h1`
  line-height: 20px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;

export const PriceCoffee = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-bold-m"]};
`;

export const AreaButtonCart = styled.div`
  display: flex;
  gap: 0.5rem;

  button{ 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 6px 0;
    border: none;
    width: 90px;

    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-button"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-s"]};

    svg{
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
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

  button{
    display: flex;
    border: none;
    outline: none;
    width: 0.875rem;
    height: 0.875rem;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
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
  color: ${({ theme }) => theme.colors['brand-purple']};
`;

export const CoffeeQuantity = styled.p`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;

