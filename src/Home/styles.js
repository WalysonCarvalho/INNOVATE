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
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
    width: auto;
  }

  @media (max-width: 375px), (max-width: 768px) {
    /* Remove a barra de rolagem lateral em telas pequenas */
    overflow-x: hidden;
  }
`;
