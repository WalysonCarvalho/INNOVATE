import React, { useState, useEffect } from "react";
import { HeaderContainer, MenuToggle, NavMenu, MenuItem } from "./styles";
import { Menu } from "../../Components/Menu"; // Importando o Menu

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev); // Usar o valor anterior
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <MenuToggle
        type="checkbox"
        id="menuToggle"
        onChange={handleToggleMenu} // Para alternar o menu
        checked={isMenuOpen}
      />
      <Menu isOpen={isMenuOpen} onLinkClick={handleLinkClick} /> {/* Adicionando o Menu */}
      <NavMenu className={isMenuOpen ? "active" : ""}>
        <ul>
          <MenuItem>
            <a href="#section1" onClick={handleLinkClick}>
              Section 1
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#section2" onClick={handleLinkClick}>
              Section 2
            </a>
          </MenuItem>
          {/* Adicionar mais links de navegação conforme necessário */}
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}
