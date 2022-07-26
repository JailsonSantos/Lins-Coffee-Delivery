import styled from "styled-components";

export const SuccessfulOrderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const AreaInfoDescription = styled.div`

`;

export const TitleDescription = styled.h1`
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
`;

export const SubtitleDescription = styled.p`
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
  margin-bottom: 2.5rem;
`;

export const AreaDescriptionAddress = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px 36px 6px 36px;
  height: 17rem;
  padding: 1.5rem;
  margin-bottom: 0.75rem;
  background: ${({ theme }) => theme.colors["base-card"]};
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
  width: 50%;
`;