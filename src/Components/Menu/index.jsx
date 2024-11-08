import React from 'react';
import { MenuToggle, MenuAberto, NavMenu, NavLink } from './styles';

export function Menu({ isOpen, onLinkClick }) {
    return (
        <>
            <MenuToggle type="checkbox" id="menuToggle"/>
        
            <MenuAberto className={isOpen ? "active" : ""}>
                <NavMenu>
                    <NavLink href="#inicio" onClick={onLinkClick}>Início</NavLink>
                    <NavLink href="#sobre" onClick={onLinkClick}>Sobre</NavLink>
                    <NavLink href="#portifolio" onClick={onLinkClick}>Portfólio</NavLink>
                    <NavLink href="#contato" onClick={onLinkClick}>Contato</NavLink>
                </NavMenu>
            </MenuAberto>
        </>
    );
}
