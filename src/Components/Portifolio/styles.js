import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 7rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const PortfolioSection = styled.section`
  width: 100%;
  height: 100%;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &#card-1,
  &#card-2 {
    transform: translateX(-800px);
  }
  &#card-3 {
    transform: translateX(800px);
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeadlinePortfolio = styled.div`
  opacity: 0;
  transform: translateX(800px);
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    text-align: center;

    font-size: 1rem;
    width: 375px;
    text-align: center;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  width: 50%;
  font-size: 6vw;
  font-weight: lighter;
  font-family: var(--font-grande);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 8vw;
    text-align: center;
  }
`;

export const Description = styled.span`
  width: 50%;
  font-size: 2rem;
  text-align: right;
  line-height: 1.4;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
  }
`;

export const CaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 768px) {
    gap: 4rem;

    height: auto;
    flex-direction: column;
    text-align: center;

    font-size: 1rem;
    width: 375px;
    text-align: center;
    padding: 2rem;
  }
`;

export const Case = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
`;

export const ImagesCase = styled.div`
  opacity: 0;
  transform: translateX(-800px); // Vem da direita para o centro
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%; /* A largura será 100% do contêiner */
    max-width: 680px; /* Limita a largura máxima para 680px no desktop */
    max-height: 500px; /* Altura aumentada para 500px no desktop */
    object-fit: cover; /* Preenche o contêiner sem distorcer */
    object-position: center; /* Centraliza a imagem */
    box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%; /* A largura da imagem será 100% do contêiner no celular */
      height: auto; /* A altura será ajustada automaticamente */
      max-height: 330px; /* Limita a altura máxima para 330px */
    }
  }
`;

export const PrevNextIcon = styled.i`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  font-size: 2rem;
  user-select: none;
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextsCase = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
    order: ${(props) => (props.reverse ? 1 : 2)};
  }
`;

export const ContentTextsCase = styled.div`
  opacity: 0;
  transform: translateX(800px); // Vem da esquerda para o centro
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    font-size: 6vw;
    letter-spacing: 3px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 1.5px;
    padding-bottom: 1.5rem;
  }

  .typeService {
    width: 180px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    border-radius: 50px;
    color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
    font-weight: bold;
    letter-spacing: 1.2px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5vw;
    }

    p {
      font-size: 1.3rem;
    }

    .typeService {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      font-size: 1rem;
    }
  }
  button {
    background-color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-weight: bold;
    width: 190px;
    padding: 1rem 0;
    border: 2px solid rgba(128, 128, 128, 0.5);
    outline: none;
    border-radius: 30px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};
    }

    @media (max-width: 768px) {
      width: 150px;
      padding: 0.8rem 0;
    }
  }
  .modal-dialog {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 80%;
  max-height: 500px;
  margin: auto;
  padding: 20px;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  overflow-y: auto; /* Permite rolagem vertical se o conteúdo ultrapassar o limite */
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
}

.modal-close {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  align-self: flex-end; /* Posiciona o botão de fechar à direita */
  margin-top: 10px; /* Dá espaço entre o texto e o botão */
}

.modal-close:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .modal-dialog {
    width: 90%;
    max-height: 45vh;
  }
}


`;
export const SaibaMaisButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00b5e2;
  }
`;

// Estilo para o Modal (Você pode personalizar conforme necessário)
export const ModalContentStyled = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  

  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  button {
    padding: 8px 15px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005bb5;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #00b5e2;
    }
  }
`;
