import React from 'react';
import { Container, FixedButton } from './styles';
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <Container>
      <FixedButton id="whatsappButton">
        <a id='whats' href="https://api.whatsapp.com/send?phone=5521995435330&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noreferrer">
        <FaWhatsapp size={60} color='#fff'/>

        </a>
      
      </FixedButton>
    </Container>
  );
}
