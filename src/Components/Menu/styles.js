import styled from 'styled-components';

export const MenuToggle = styled.input`
position: absolute;
background: red;
color: white;
inset: 0 ;
display: grid;
place-content: center;


    @media (max-width: 768px) {
        display: block;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
    }
`;

export const MenuAberto = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 768px) {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &.active {
        display: flex;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        color:${({ theme }) => theme.COLORS.COLOR_BLUE};
    }
`;
