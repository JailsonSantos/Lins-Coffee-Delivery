import styled from "styled-components";
import { mobile, notebook, tablet } from "../../styles/responsive";

export const LayoutContainer = styled.div`

  padding: 0 8rem;

  ${notebook({ padding: '0 4rem' })}; 

  ${tablet({ padding: '0 2rem' })};

  ${mobile({ padding: '0 1rem' })};
`;

