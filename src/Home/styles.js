import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  /* Cor de fundo semitransparente */
    z-index: 999; /* Garantindo que o fundo fique abaixo do modal */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
     @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
   
`;
