import styled from 'styled-components';
import { mobile, tablet, notebook } from '../../styles/responsive';

export const HeaderContainer = styled.div`

  ${notebook({ height: '5.5rem' })}; 

  ${tablet({ height: '5rem' })};

  ${mobile({ height: '4rem' })};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem; 

  img{ 
    margin: 2rem 0;

    ${notebook({ margin: '0.5rem 0' })}; 

    ${tablet({ margin: '0.5rem 0' })};  

    ${mobile({ margin: '0' })};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.5rem;
`;

export const LocalizationButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['brand-purple-light']};

  svg{ 
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
  span{
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`;

export const CartButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['brand-yellow-light']};

  svg{ 
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

`;