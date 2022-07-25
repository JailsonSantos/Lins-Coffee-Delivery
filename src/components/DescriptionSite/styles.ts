import styled from "styled-components";

export const AreaDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //height: 20rem;
  padding: 2.875rem 0;
  gap: 3.5rem;
`;

export const AreaTextDescription = styled.div`
  display: flex;
  width: 43%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  h1{ 
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    font-weight: 800;
    line-height: 3.875rem;
    margin-bottom: 1rem ;
  }

  p{ 
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }
`;

export const AreaInfoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.125rem;
`;


export const AdvertisingImage = styled.img`
  width: 30rem;
`
