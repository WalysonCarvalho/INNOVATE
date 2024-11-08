import React, { useState } from "react";
import { Container, Logo, Menu, Hamburger, MenuAberto, NavMenu } from "./styles";
import logoImg from "../../assets/logo_INNOVATE.webp"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu quando um link é clicado
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Logo Innovate" />
      </Logo>
      <Menu>
        <Hamburger onClick={toggleMenu}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </Hamburger>
      </Menu>
      <MenuAberto className={isMenuOpen ? "active" : ""} onClick={toggleMenu}>
        <NavMenu onClick={(e) => e.stopPropagation()}>
          <a href="#inicio" onClick={handleLinkClick}>INÍCIO</a>
          <a href="#sobre" onClick={handleLinkClick}>SOBRE</a>
          <a href="#servicos" onClick={handleLinkClick}>SERVIÇOS</a>
          <a href="#portifolio" onClick={handleLinkClick}>PORTIFÓLIO</a>
          <a href="#contato" onClick={handleLinkClick}>CONTATO</a>
        </NavMenu>
      </MenuAberto>
    </Container>
  );
}
