import styled from "styled-components";

export const Container = styled.div`
  .contato {
    width: 100vw;
    display: flex;
    padding: 2rem 0 3rem 0;
    align-items: center;
    justify-content: center;
    color:${({ theme }) => theme.COLORS.COLOR_BLUE};
  }

  .container-contato {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .container-contato {
      padding: 0 20px;
    }
  }
`;

export const Headline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Title = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  h1 {
    color:${({ theme }) => theme.COLORS.COLOR_BLUE};;
    font-size: 8vw;
    font-weight: lighter;
    font-family: var(--font-grande);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 6vw;
      text-align: center;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transform: translateY(100px);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;

  a {
    text-decoration: none;
    color:${({ theme }) => theme.COLORS.COLOR_BLUE};;
    font-size: 2rem;
    letter-spacing: 1.5px;
    line-height: 1.4;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    color:${({ theme }) => theme.COLORS.COLOR_BLUE};
    font-weight: 500;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    width: 100%;
    h2, p {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  font-family: var(--font-pequena);
  width: 100%;
  height: 50px;
  border-radius: 30px;
  outline: none;
  border: 2px solid rgba(128, 128, 128, 0.5);
  padding: 0 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    height: 45px;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border-radius: 30px;
  outline: none;
  border: 2px solid rgba(128, 128, 128, 0.5);
  font-family: var(--font-pequena);
  font-size: 1.2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 120px;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
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
  &:hover{
    background-color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};

  }

  @media (max-width: 768px) {
    width: 150px;
    padding: 0.8rem 0;
  }
`;

export const LogoContainer = styled.div`

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  >.mapsContainer{
    margin-top: 5rem;
   height: 400px;
    border-radius: 10%
  }

  @media (max-width: 768px) {
    >.mapsContainer {
      width: 100%;
      height: 70%;
      border-radius: 10%;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
    }
  }
`;
