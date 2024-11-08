import { Container, FixedButton, Icon } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function BackToTopButton() {
  return (
    <Container>
      <FixedButton id="backToTop">
      <FaWhatsapp size={60}/>
      <a href="+55 21 99543-5330" target="_blank "></a>

      </FixedButton>
    </Container>
  );
}
