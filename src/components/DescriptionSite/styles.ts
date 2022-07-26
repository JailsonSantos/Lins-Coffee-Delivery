import styled from "styled-components";
import { mobile, notebook, tablet } from "../../styles/responsive";

export const AreaDescriptionContainer = styled.div`
  gap: 3.5rem;
  display: flex;
  padding: 2.875rem 0;
  justify-content: space-between;
  //height: 20rem;

  ${notebook({
  padding: '0.5rem 0'
})};

  ${tablet({
  gap: '1.5rem',
  padding: '0.5rem 0',
  flexDirection: 'column-reverse',
})};
  
  ${mobile({
  gap: '1.5rem',
  padding: '1rem 0',
  flexDirection: 'column-reverse',
})};
`;

export const AreaTextDescription = styled.div`

  flex: 2;
  width: 43%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  ${tablet({ width: '100%', flexDirection: 'row' })};

  ${mobile({ width: '100%', flexDirection: 'column' })};
  
  h1{     
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 3.875rem;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};

    ${tablet({ fontSize: "2.5rem", lineHeight: "3rem" })};
    ${mobile({ fontSize: "2.2rem", lineHeight: "2.5rem" })};
  }

  p{ 
    color: ${({ theme }) => theme.colors["base-subtitle"]}
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
  }
`;

export const AreaInfoItem = styled.div`
  flex: 1;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.125rem;

  ${tablet({ marginTop: '0' })};

  ${mobile({ marginTop: '1.5rem' })};
`;

export const AdvertisingImage = styled.img`

  width: 25rem; 
  
  ${notebook({ width: "38%", margin: '0 auto' })};

  ${tablet({ width: "40%", margin: '0 auto' })};
  
  ${mobile({ width: "80%", margin: '0 auto' })};
`;
