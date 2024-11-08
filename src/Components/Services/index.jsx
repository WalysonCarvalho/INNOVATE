import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiWorldhealthorganization } from "react-icons/si";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import { IoNutrition } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";



import {
  Section,
  Container,
  Headline,
  Title,
  Description,
  CardsContainer,
  Card,
  CardTitle,
  CardIcon,
} from "./styles";

export function Services() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".card", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containerService",
        //markers:true,
        start: "top 400px",
        end: "bottom 500px",
      },
    });

    return () => {
      gsap.killTweensOf(".card"); // Corrigido: função de limpeza em formato de retorno
    };
  }, []);

  return (
    <Section id="servicos">
      <Container>
        <Headline>
          <div>
            <Title>
              Serviços <br />
              <span id="classin">IN</span><span id="classin-2">N</span>OVATE
            </Title>
          </div>
          <Description>
            <p>
              Na Innovate, oferecemos uma variedade de serviços para o seu
              bem-estar, incluindo Muay Thai, Fisioterapia, Jiu Jitsu,
              Nutricionista e Pilates, para atender todas as suas necessidades
              de saúde e fitness.
            </p>
          </Description>
        </Headline>
        <CardsContainer className="containerService">
          <Card className="card" id="card-1">
            <CardTitle>Muay Thai</CardTitle>
            <GiBoxingGloveSurprise id="icon-1" />
          </Card>

          <Card className="card" id="card-2">
            <CardTitle>Fisioterapia</CardTitle>
            <SiWorldhealthorganization id="icon-2" />
          </Card>
          <Card className="card" id="card-3">
            <CardTitle>Jiu-Jitsu</CardTitle>
            <LiaUsersSolid id="icon-3"/>

            
          </Card>
          <Card className="card" id="card-4">
            <CardTitle>Nutricionista.</CardTitle>
            <IoNutrition id="icon-4" />
            
          </Card>
          <Card className="card" id="card-5">
            <CardTitle>Pilates</CardTitle>
            <GiWeightLiftingUp id="icon-5" />

            
          </Card>
          
        </CardsContainer>
      </Container>
    </Section>
  );
}
