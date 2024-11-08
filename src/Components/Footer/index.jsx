import { 
  Container, 
  FooterSection, 
  FooterInnerContainer, 
  FooterColumn, 
  LogoColumn, 
  MenuColumn, 
  SocialColumn, 
  FooterNav, 
  SocialLinks, 
  CreditsColumn 
} from "./styles";
import logoImg from "../../assets/logo_INNOVATE.webp"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export function Footer() {
  return (
    <Container>
      <FooterSection id="footer">
        <FooterInnerContainer>
          <LogoColumn className="footer-column">
            <img src= {logoImg} alt="Logo Innovate " />
          </LogoColumn>
          <MenuColumn className="footer-column">
            <FooterNav>
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#portifolio">Portfolio</a>
              <a href="#contato">Contato</a>
            </FooterNav>
          </MenuColumn>
          <SocialColumn className="footer-column">
            <SocialLinks>
              <li><a href="#"><i className="bi bi-instagram"></i> <FaSquareInstagram size ={60}/>
              </a></li>
              <li><a href="#"><FaFacebook size= {60}/>
              </a></li>
              <li><a href="#"><FaLinkedin size= {60} />
              </a></li>
            </SocialLinks>
          </SocialColumn>
        </FooterInnerContainer>
        <CreditsColumn className="footer-column">
          <p>&copy; 2024 Todos os direitos reservados.</p>
          <p>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/walyson-carvalho/">Walyson Carvalho</a>│Dev.</p>
        </CreditsColumn>
      </FooterSection>
    </Container>
  );
}
