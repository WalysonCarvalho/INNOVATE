import styled, { keyframes } from 'styled-components';

// Definindo a animação de 'pulse'
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

// Container principal
export const Container = styled.div`
  position: relative;
`;

// Botão fixo
export const FixedButton = styled.button`
  position: fixed;
  display: none; /* O botão começa escondido */
  align-items: center;
  justify-content: center;
  width: 60px; /* Ajuste do tamanho do botão */
  height: 60px;
  border-radius: 50%;
  background-color: #25d366; /* Cor de fundo WhatsApp */
  color: #fff; /* Cor do ícone */
  cursor: pointer;
  z-index: 1000;
  opacity: 0; /* Transparente inicialmente */
  transition: opacity 0.5s ease, box-shadow 0.5s ease;

  // Animação de pulsação
  animation: ${pulse} 2s infinite;

  // Posição do botão
  bottom: 20px;
  right: 20px;

  // Quando o botão é visível
  &.visible {
    display: flex; /* Exibe o botão */
    opacity: 1;
  }
  #whats {
    text-decoration: none;
  }
  
`;

// Estilização opcional para o ícone (se for necessário mais personalização)
export const Icon = styled.div`
  font-size: 24px;
  color: #fff;
`;
