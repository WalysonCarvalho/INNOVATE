import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  background-color: #333;
  padding: 10px;
`;

export const MenuToggle = styled.input`
  display: none;

  &:checked + nav {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: none;
  &.active {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export const MenuItem = styled.li`
  margin: 10px 0;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;

    &:hover {
      color: #f0a500;
    }
  }
`;
