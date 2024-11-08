import styled from "styled-components";

export const Container = styled.header`
  user-select: none;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 2rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  transition: top 0.3s ease-in-out;
  background: linear-gradient(to bottom, #003459, #e1f5fe);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Logo = styled.div`
  width: 100%;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    border-radius: 50%;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 100;
`;

export const MenuHeader = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease;

  &.open {
    transform: rotate(180deg);
    opacity: 0.7;
  }
`;

export const MenuAberto = styled.div`
  background-color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    }
  }
`;
