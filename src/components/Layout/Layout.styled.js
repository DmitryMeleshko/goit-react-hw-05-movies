import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 12px;
`;

export const Header = styled.header`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;
export const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #18272f;

  &.active {
    color: #1308ba;
    ::before {
      background-color: #1308ba;
    }
  }
  
`;

export const Fallback = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 40px;
`;