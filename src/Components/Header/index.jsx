import React, { useState } from "react";
import { Container, Logo, Menu, MenuHeader, MenuAberto, NavMenu } from "./styles";
import logoImg from "../../assets/logo_INNOVATE.webp";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";

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
        <MenuHeader onClick={toggleMenu} className={isMenuOpen ? "open" : ""}>
          {isMenuOpen ? (
            <RiCloseLargeLine size={60} color="#fff" />
          ) : (
            <TiThMenu size={60} color="#fff" />
          )}
        </MenuHeader>
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
