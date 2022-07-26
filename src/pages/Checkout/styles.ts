import styled from 'styled-components';

export const AreaCheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  gap: 2rem;
`;

export const AreaAddress = styled.div`

  form{ 
    width: 40rem;
    height: 21rem;
    padding: 1.5rem;
    border-radius: 6px;
    margin-bottom: 0.75rem;
    background: ${({ theme }) => theme.colors["base-card"]};

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
  flex-wrap: wrap;
  gap: 1rem;

  input::placeholder{
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }
`;

export const AreaPayment = styled.div`
    width: 40rem;
    height: 11rem;
    padding: 1.5rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors["base-card"]};

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

  button {
    width: 12rem ;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.textSizes['components-button-s']};
  }
`;

export const AreaCart = styled.div`
  flex: 1;

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px 44px 6px 44px;
    max-height: 32.5rem;
    overflow-y: auto;
    padding: 1.5rem;
    margin-bottom: 0.75rem;
    background: ${({ theme }) => theme.colors["base-card"]};

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TitleOfCart = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const TopCart = styled.div``;
export const BodyCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  border-radius: 6px;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
`;