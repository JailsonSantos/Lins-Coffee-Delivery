import styled from 'styled-components';
import { mobile, notebook, tablet } from '../../styles/responsive';

export const AreaCheckoutContainer = styled.div`
  gap: 2rem;
  display: flex;
  margin: 1.5rem 0;
  justify-content: space-between;

  ${tablet({ flexDirection: 'column' })};
  ${mobile({ flexDirection: 'column' })};
`;

export const AreaAddress = styled.div`

  ${notebook({ width: '50%' })}
  ${tablet({ width: '100%' })}

  form{     
    width: 100%;
    padding: 1.5rem;
    border-radius: 6px;
    margin-bottom: 0.75rem;
    background: ${({ theme }) => theme.colors["base-card"]};

    ${notebook({ padding: '1rem' })};
    ${tablet({ width: '100%', height: '100%', padding: '1rem' })};
    ${mobile({ width: '100%', height: '100%', padding: '1rem' })};

    > div {
      display: flex;
      margin-bottom: 2rem;

      svg{
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        margin-right: 0.5rem;
      }
    }

    input {
      width: 250px;
      height: 2.625rem;
      border-radius: 4px;
      padding: 0.75rem;
      background: ${({ theme }) => theme.colors['base-input']};
      border: 1px solid ${({ theme }) => theme.colors['base-button']};
      
      ${notebook({ width: '100%' })};
      ${tablet({ width: '100%' })};
      ${mobile({ width: '100%' })};
    }
  }
`;

export const TitleOfAddress = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;

export const AreaInputs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  input::placeholder{
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }
`;

export const AreaPayment = styled.div`
 
  width: 100%;
  height: 11rem;
  padding: 1.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-card"]};

  ${notebook({ width: '100%', padding: '1rem' })};
  ${tablet({ width: '100%', height: '100%', padding: '1rem' })};
  ${mobile({ width: '100%', height: '100%', padding: '1rem' })};

  > div {
    display: flex;
    margin-bottom: 2rem;

    svg{
      color: ${({ theme }) => theme.colors['brand-purple']};
      margin-right: 0.5rem;
    }
}`;

export const TitlePayment = styled.p`
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
`;

export const SubtitlePayment = styled.p`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;

export const FooterPayment = styled.div`
  display: flex; 
  gap: 0.75rem;

  ${mobile({ flexDirection: "column", alignItems: "center" })};

  button {
    border: none;
    width: 12rem ;
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors['base-button']};
    font-size: ${({ theme }) => theme.textSizes['components-button-s']};

    ${mobile({ justifyContent: "flex-start" })};
  }
`;

export const AreaCart = styled.div`
 
   >div{
    display: flex;
    padding: 1.5rem;
    overflow-y: auto;
    max-height: 32.5rem;
    margin-bottom: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px 44px 6px 44px;
    background: ${({ theme }) => theme.colors["base-card"]};

    ${notebook({ padding: '1rem' })};
    ${mobile({ padding: '1rem' })};

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TitleOfCart = styled.h1`
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
`;

export const TopCart = styled.div``;

export const BodyCart = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const BaseCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalQuantityItens = styled(BaseCart)`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;

export const EntregaPedido = styled(BaseCart)`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;

export const TotalPrice = styled(BaseCart)`
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
`;

export const BottomCart = styled.button`
  width: 100%;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
`;