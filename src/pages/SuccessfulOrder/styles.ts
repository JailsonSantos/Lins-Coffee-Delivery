import styled from "styled-components";
import { mobile, tablet, notebook } from '../../styles/responsive';

export const SuccessfulOrderContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: flex-end;
  justify-content: space-between;

  ${notebook({ marginTop: '1rem' })}; 

  ${tablet({ marginTop: '1rem' })};

  ${mobile({ flexDirection: 'column-reverse', marginTop: '1rem' })};
`;

export const AreaInfoDescription = styled.div``;

export const TitleDescription = styled.h1`

${mobile({ fontSize: '1.7rem' })};

  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
`;

export const SubtitleDescription = styled.p`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
`;

export const AreaDescriptionAddress = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px 36px 6px 36px;
  height: 17rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: ${({ theme }) => theme.colors["base-card"]};

  ${mobile({ padding: '0.5rem' })};
`;

export const AreaIconDescription = styled.div`
  display: flex;
  gap: 10px;

  p{
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  }

  span{
    font-weight: bold;
  }
  
`;

export const DeliveryImage = styled.img`
  ${mobile({ width: '100%', margin: '0 auto' })};

  width: 50%;
`;