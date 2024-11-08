import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const FixedButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 255, 0, 0.5);
  color: rgba(0, 255, 0, 0.5);
  cursor: pointer;
  z-index: 1000;
  opacity: 1;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease, box-shadow 0.5s ease;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  color: #fff;
`;
