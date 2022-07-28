import styled from 'styled-components';
import { mobile, tablet, notebook } from '../../../../styles/responsive';

export const ItemCartContainer = styled.div`

  ${notebook({ width: '368px' })};
  ${tablet({ width: '100%' })};
  ${mobile({ width: '100%' })};

  display: flex;
  width: 368px;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
`;

export const ImageCoffee = styled.img`
  width: 50px;
  height: 50px;

  ${mobile({ width: '50px', height: '50px' })};

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
  
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button{ 
    width: 90px;
    border: none;
    display: flex;
    padding: 6px 0;
    border-radius: 6px;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-button"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-s"]};

    svg{
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
    
    &:hover{
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      svg{
        color: ${({ theme }) => theme.colors['brand-purple-dark']};
      }
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

    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
`;

export const CoffeeQuantity = styled.p`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;

