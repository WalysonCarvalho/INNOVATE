import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  @media (max-width: 768px) {
    gap: 4rem;

    height: auto;
    flex-direction: column;
    text-align: center;

    font-size: 1rem;
    width: 100vw;
    text-align: center;
    padding: 2rem;
    
  
  }
`;

export const FooterSection = styled.footer`
  width: 100%;
  min-width: max-content;
  background: linear-gradient(to bottom, #E1F5FE, #003459);
  ;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 375px) {
    min-height: max-content;
    width: 375px;
    text-align: center;
    padding: 2rem;
  }
`;

export const FooterInnerContainer = styled.div`
  width: 100%;
  //max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoColumn = styled(FooterColumn)`
  align-items: flex-start;

  img {
    display: flex ;
    justify-content: center;
    align-items: center;
    width: 80px;
    border-radius: 50%;
  }
`;

export const MenuColumn = styled(FooterColumn)`
  text-align: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
    }
  }
`;

export const SocialColumn = styled(FooterColumn)`
  text-align: right;
`;

export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.COLOR_BLUE};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    i {
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.COLOR_DARKBLUE};
    }
  }
`;

export const CreditsColumn = styled(FooterColumn)`
  text-align: right;
  font-size: 0.9rem;

  p {
    margin: 0.2rem 0;
  }
  a{
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
`;

