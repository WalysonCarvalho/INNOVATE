import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Container,
  Headline,
  Title,
  Description,
  ContactList,
  Content,
  FormContainer,
  Form,
  Input,
  TextArea,
  Button,
  LogoContainer,
} from "./styles";

export function Contact() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray([
      ".contactList",
      ".formContainer",
      ".logoContainer",
    ]);

    elements.forEach((el, index) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 500px",
          end: "bottom 700px",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function sendToWhatsapp() {
    let phone = "5521995435330"; // Número sem o símbolo "+", como no link que você forneceu.
    let name = document.getElementById("name")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let message = document.getElementById("message")?.value || "";
  
    // Montar a URL para a API do WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      "Olá, gostaria de mais informações!\n" +
      "Nome: " + name + "\n" +
      "Email: " + email + "\n" +
      "Mensagem: " + message
    )}`;
  
    window.open(url, '_blank').focus();
  }
  
  

  return (
    <Container>
      <section id="contato" className="contato">
        <div className="container-contato">
          <Headline>
            <Title>
              <h1>Contato</h1>
            </Title>
            <Description>
              <ContactList className="contactList">
                <li>
                  <a href="#">WhatsApp: (21) 995435330</a>
                </li>
                <li>
                  <a href="#">email@seuemail.com.br</a>
                </li>
                <li>
                  <a href="#">Estrada do Cordeiro,170 - Santa Izabel - SG </a>
                </li>
              </ContactList>
            </Description>
          </Headline>
          <Content>
            <FormContainer className="formContainer">
              <h2>Cuide da sua saúde!</h2>
              <p>Entre em contato.</p>
              <Form>
                <Input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome completo"
                />
                <Input type="phone" id="phone" placeholder="(55) 22222-2222" />
                <Input type="email" id="email" placeholder="Seu melhor email" />
                <TextArea
                  id="message"
                  placeholder="Escreva o que você deseja aqui..."
                ></TextArea>
                <Button onClick={sendToWhatsapp} type="submit">
                  Enviar
                </Button>
              </Form>
            </FormContainer>
            <LogoContainer>
              <iframe
                className="mapsContainer"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.4826686973483!2d-42.94577752504731!3d-22.85862173615075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999187a68be3e5%3A0x2507ff0058f98f38!2sInnovate%20Pilates%2C%20Fisioterapia%20e%20Nutri%C3%A7%C3%A3o%2FCT%20Marcus%20Vin%C3%ADcius!5e0!3m2!1spt-BR!2sbr!4v1730824049659!5m2!1spt-BR!2sbr"
                width="600"
                height="750"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </LogoContainer>
          </Content>
        </div>
      </section>
    </Container>
  );
}
