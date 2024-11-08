import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import {
  Container,
  Section,
  HeadlineSobre,
  ConteudoSobre,
  LeftSobre,
  RightSobre,
  RedesSociais,
} from "./styles";
import foto1 from "../../assets/marcus-atendimento-web.p.webp";

export function On() {
  const el = useRef();
  const tl = useRef();
  const img = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".textosSobre", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containerSobre",
        start: "top 400px",
        end: "bottom 500px",
      },
    });

    return () => {
      gsap.killTweensOf(".textosSobre"); // Corrigido: função de limpeza em formato de retorno
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ContainerRedes",
            //markers: true,
            start: "top 700px",
            end: "bottom 900px",
          },
        })

        .fromTo(
          "#card-1",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card-2",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card-3",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        
    }, el);

    return () => {
      gsap.killTweensOf(".ContainerRedes"); // Corrigido: função de limpeza em formato de retorno
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const vtx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            //trigger: ".rightSobreImg",
            //markers: true,
            start: "top 600px",
            end: "bottom 700px",
          },
        })

        .fromTo(
          "#imgOn",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
    }, img);

    return () => {
      //gsap.killTweensOf(".rightSobreImg"); // Corrigido: função de limpeza em formato de retorno
    };
  }, []);

  return (
    <Container>
      <Section id="sobre">
        <div className="sobreContainerOne">
          <HeadlineSobre>
            <div className="headline-scroll" id="headline-scroll">
              <span className="bold">SAÚDE</span>
              <span className="divisor"></span>
              <span className="light">PILATES</span>
              <span className="divisor"></span>
              <span className="bold">OSTEOPATIA</span>
              <span className="divisor"></span>
              <span className="light">FISIOTERAPIA</span>
              <span className="divisor"></span>
              <span className="bold">REABILITAÇÃO</span>
              <span className="divisor"></span>
              <span className="light">CUIDADO</span>
              <span className="divisor"></span>
              <span className="bold">MOVIMENTO</span>
            </div>
          </HeadlineSobre>
          <ConteudoSobre className="containerSobre">
            <LeftSobre>
              <div className="textosSobre">
                <h1>Bem-vindo à <span id="classin">IN</span>NOVATE</h1>
                <p>
                Somos especializados em fisioterapia e pilates, comprometidos com a sua recuperação e bem-estar. Nossos profissionais oferecem tratamentos personalizados para melhorar sua qualidade de vida e saúde física.
                </p>
              </div>
              <RedesSociais className="redeSocial" ref={el}>
                <div id="card-1" className="ContainerRedes">
                  <a href="https://www.instagram.com/innovatefisioterapia.saude/" target="_blank"  rel="noopener noreferrer"> 
                    INSTAGRAM<i></i>
                  </a>
                </div>
               
                <div id="card-2" className="ContainerRedes">
                  <a href="https://www.facebook.com/innovatepilatesefisioterapia/" target="_blank"  rel="noopener noreferrer">
                    FACEBOOK<i></i>
                  </a>
                </div>
                <div id="card-3" className="ContainerRedes">
                  <a href="#">
                    LINKEDIN<i></i>
                  </a>
                </div>
              </RedesSociais>
            </LeftSobre>
            <RightSobre ref={img}>
              <div className="imagem-sobre" id="imgOn">
                <img src={foto1} alt="" />
              </div>
            </RightSobre>
          </ConteudoSobre>
        </div>
      </Section>
    </Container>
  );
}
