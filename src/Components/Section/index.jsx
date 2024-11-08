import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { SiWorldhealthorganization } from "react-icons/si";
import { MdFitnessCenter } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { MdAccessibilityNew } from "react-icons/md";





import {
  Container,
  Headline,
  TextHeadline,
  Content,
  BoxSkill,
  Icon,
} from "./styles";

export function Section() {
  const el = useRef();
  const tl = useRef();
  const textTl = useRef(); // Ref para o timeline do texto
  const skill = useRef(); // Ref para o texto

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top 300px",
          end: "bottom 600px",
          scrub: true,
           
        },
      })
        .fromTo(
          "#box-1",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          "#box-2",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 2 },
          "-=0.5"
        )
        .fromTo(
          "#box-3",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 3 },
          "-=0.5"
        )
        .fromTo(
          "#box-4",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 4 },
          "-=0.5"
        );
    }, el);

    return () => ctx.revert(); 
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    textTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: skill.current,
        start: "top 90%", 
        end: "bottom 80%",
        //scrub: true,
        //markers: true,
      
      },
    }).fromTo(
      skill.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 },
      "-=0.5"
    );

    return () => textTl.current.scrollTrigger.kill(); // Limpeza do ScrollTrigger ao desmontar
  }, []);

  return (
    <Container>
      <div>
        <Headline ref={skill}> 
          <TextHeadline>
            <h2>Nossas Habilidades em Fisioterapia</h2>
            <p>
            Oferecemos tratamentos especializados em Quiropraxia, Osteopatia, Pilates e Fisioterapia para promover seu bem-estar e saúde.
            </p>
          </TextHeadline>
        </Headline>
        <Content ref={el} className="container">
          <BoxSkill className="box" id="box-1">
          <SiWorldhealthorganization id="icon-1" />
            <h3>Fisioterapia.</h3>
            <p>Fisioterapia é fundamental para reabilitação, alívio de dores e prevenção de lesões, promovendo o bem-estar físico.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-2">
          <MdFitnessCenter id="icon-2" />
            <h3>Pilates</h3>
            <p>Pilates é uma prática que melhora a flexibilidade, força e postura, promovendo equilíbrio e saúde para o corpo.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-3">
          <FaHandsHoldingCircle id="icon-3" />
            <h3>Quiropraxia</h3>
            <p>A Quiropraxia é uma técnica que foca na manipulação da coluna vertebral, aliviando dores e promovendo a mobilidade.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-4">
          <MdAccessibilityNew id="icon-4" />
            <h3>Osteopatia</h3>
            <p>A Osteopatia utiliza técnicas manuais para restaurar a mobilidade e aliviar dores, promovendo um corpo mais funcional e saudável.</p>
          </BoxSkill>
        </Content>
      </div>
    </Container>
  );
}
