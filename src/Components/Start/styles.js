import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  z-index: 1;
  user-select: none;
  padding-top: 4rem;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  z-index: 1;
`;

export const ConteudoInicio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  

  .titulo-inicio {
    font-size: clamp(1rem, 2.5vw + 0.8rem, 3rem);
    font-family: 'Roboto', sans-serif;
    #classin{
      color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};
    }
    
    
  }

  .destaque-inicio {
    font-weight: lighter;
    @media (max-width: 768px) {
      font-size: 2rem;
      width: 375px;
      text-align: center;
      padding: 2rem;
    }
  }

  .paragrafo-inicio p {
    font-size: 1.2rem; /* Define um tamanho padrão */
    max-width: 900px;
    width: 100%; 
    padding: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      width: 375px;
      text-align: center;
      padding: 2rem;
    }
}
`;

export const BotaoCta = styled.button`
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;

  a {
    font-size: clamp(1.2rem, 1.5vw + 1rem, 2rem);
    position: relative;
    text-decoration: none;
    
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    box-shadow: 4px  4px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  &:hover:before {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.COLOR_BLUE};
  }

  &:hover svg {
    transform: translateX(0);
    stroke: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ComplementoInicio = styled.div`
  position: absolute;
  display: flex;
  bottom: 2rem;
  width: 100vw;
  padding: 0rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    width: 200px;
  }

  .qr-code {
    width: 80px;
    opacity: 0.2;
    transition: all 0.5s ease-in-out;
  }

  .qr-code:hover {
    opacity: 1;
  }
`;
