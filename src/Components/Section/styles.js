import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Headline = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextHeadline = styled.div`
    transform: translateY(100px) h2 {
    font-size: 3rem;
    transform: translateY(-100px);
  }

  p {
    font-size: 1.5rem;
    color: var(--color-gray2);
    font-weight: 500;
    line-height: 1.4;
    max-width: 900px;
  }
  @media (max-width: 768px) {
    width: 375px;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const BoxSkill = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 450px;
  padding: 2rem;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(100px);
  color:${({ theme }) => theme.COLORS.COLOR_BLUE};

  #icon-1, #icon-2, #icon-3, #icon-4 {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
    border: NONE;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }
`;

export const Icon = styled.i`
  font-size: 4rem;
  
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

`;
