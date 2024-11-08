import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  width: 100vw;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Headline = styled.div`
  width: 100%;
  height: 40vh;
  gap: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};
  font-size: 6rem;
  font-weight: lighter;
  font-family: var(--font-grande);
  width: 50%;
  @media (max-width: 768px) {
    font-size: 10vw;
    width: 100%;
  }

  
  #classin{
    color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
  }
`;

export const Description = styled.div`
  width: 50%;
  font-size: 2rem;
  text-align:left;
  line-height: 1.4;
  letter-spacing: 1.5px;
  
  @media (max-width: 780px) {
    >p {
      display: none;
      
    }

    
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;


export const Card = styled.div` 
  border: 1px solid hsla(0, 0%, 0%, 0.35);
  max-width: 95%;
  min-height: 180px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  opacity: 0; 

  #icon-1, #icon-2, #icon-3, #icon-4, #icon-5 {
    font-size: 6rem;
  }

  /* Transformação inicial alternada por ID */
  &#card-1, &#card-3, &#card-5 {
    transform: translateX(-800px); 
  }
  
  &#card-2{
    transform: translateX(800px);  
  }
`;


export const CardLeft = styled(Card)`
  margin-left: 5%;
`;

export const CardTitle = styled.h1`
  width: 68%;
  font-size: clamp(0.8rem, 2.5vw + 0.4rem, 2rem);
  font-family: var(--font-pequena);
  font-weight: normal;
`;

export const CardIcon = styled.div`
  width: 25%;
  max-width: 120px;
  height: 60px;
  border: 1px solid hsla(0, 0%, 0%, 0.35);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY1};
    margin-bottom: -7px;
  }
`;

export const FreeYourMindContainer = styled.section`
  background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-family: var(--font-grande);
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.className === "center"
      ? "center"
      : props.className === "right"
      ? "flex-end"
      : "flex-start"};
`;

export const Line = styled.span`
  flex-grow: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
  margin: 0 4rem;
  display: inline-block;
`;
