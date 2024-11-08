import React, { useState } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Container,
  PortfolioSection,
  PortfolioContainer,
  HeadlinePortfolio,
  Title,
  Description,
  CaseContainer,
  Case,
  ImagesCase,
  Slide,
  PrevNextIcon,
  TextsCase,
  ContentTextsCase,
} from "./styles";

import foto1 from "../../assets/casal-pilates-foto1.png";
import foto2 from "../../assets/nutricionista-foto1-web.p.webp";
import foto3 from "../../assets/muay-thay-foto.jpeg";
import foto4 from "../../assets/Marcus.Fisio.web.p.webp";

gsap.registerPlugin(ScrollTrigger);

export function Portifolio() {
  const [openDialog, setOpenDialog] = useState(null); // Estado para controlar qual diálogo está aberto

  useLayoutEffect(() => {
    gsap.to("#card-1", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".portifolioContainer",
        start: "top 500px",
        end: "bottom 500px",
      },
    });
    gsap.to("#card-2", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".portifolioContainer",
        start: "top 500px",
        end: "bottom 500px",
      },
    });
    gsap.to("#card-3", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".portifolioContainer",
        start: "top 500px",
        end: "bottom 500px",
      },
    });

    return () => {
      gsap.killTweensOf(["#card-1", "#card-2", "#card-3"]);
    };
  }, []);

  const services = [
    {
      title: "Pilates",
      description:
        "Fortaleça o corpo e a mente com movimentos precisos e foco no equilíbrio corporal.",
      imgSrc: foto1,
      typeService: "Tipo de serviço: Pilates",
      modalDescription:
        "O Pilates é um método de exercícios focado no fortalecimento do core (músculos do abdômen e coluna) e na melhora do equilíbrio e da postura. Ele combina alongamento, controle da respiração e movimentos de baixo impacto.  Praticar Pilates é recomendado para pessoas de todas as idades que buscam maior flexibilidade, equilíbrio, força muscular e coordenação. Além disso, ele auxilia no alívio de tensões, redução de dores lombares e no fortalecimento da musculatura profunda, melhorando a postura e a estabilidade do corpo.",
    },
    {
      title: "Nutrição",
      description:
        "Uma alimentação saudável é a base para uma vida plena e cheia de energia.",
      imgSrc: foto2,
      typeService: "Tipo de serviço: Nutrição",
      modalDescription:
        " A nutrição é a base para uma vida saudável e energética. Trabalhar com um nutricionista ajuda a personalizar dietas que atendam às necessidades individuais, seja para perder peso, ganhar massa muscular ou tratar doenças. Consultar um nutricionista garante uma alimentação balanceada e direcionada a objetivos específicos. Uma dieta adequada pode aumentar a imunidade, regular o metabolismo e prevenir uma série de doenças, como diabetes e hipertensão, além de contribuir para o bem-estar físico e mental.",
    },
    {
      title: "Muay Thai",
      description:
        "Arte marcial que promove disciplina, resistência e o fortalecimento do corpo e mente.",
      imgSrc: foto3,
      typeService: "Tipo de serviço: Muay Thai",
      modalDescription:
        " O Muay Thai é uma arte marcial tailandesa focada em golpes com os punhos, cotovelos, joelhos e pés. Além de ser uma modalidade de defesa pessoal, é uma prática que exige disciplina e resistência. Praticar Muay Thai é uma forma excelente de aumentar a força física, desenvolver resistência cardiovascular e aliviar o estresse. Além disso, o treinamento promove maior agilidade e autocontrole, sendo ótimo tanto para o corpo quanto para a mente.",
    },
    {
      title: "Fisioterapia",
      description:
        "Tratamento e prevenção de lesões para melhorar a qualidade de vida.",
      imgSrc: foto4,
      typeService: "Tipo de serviço: Fisioterapia",
      modalDescription:
        "A fisioterapia é uma prática de reabilitação que atua na prevenção, tratamento e recuperação de lesões musculares, articulares e neurológicas. Ela promove o alívio de dores, melhora da mobilidade, flexibilidade e resistência física, ajudando os pacientes a restaurar a qualidade de vida. Fazer fisioterapia é essencial para tratar problemas como lesões esportivas, dores crônicas e condições pós-operatórias, além de auxiliar em condições como hérnias de disco, escolioses e outras disfunções musculoesqueléticas. Com técnicas adequadas, ela permite o fortalecimento e alongamento de músculos e tendões, melhorando o bem-estar geral.",
    },
  ];

  return (
    <Container>
      <PortfolioSection id="portifolio">
        <PortfolioContainer className="portifolioContainer">
          <HeadlinePortfolio id="card-1" className="card">
            <Title>
              <strong>
                Nossa <br /> Essência
              </strong>
            </Title>
            <Description>
              Conheça nosso trabalho e a dedicação com que cuidamos do bem-estar
              de cada paciente.
            </Description>
          </HeadlinePortfolio>

          <CaseContainer>
            {services.map((service, index) => (
              <Case key={index}>
                <ImagesCase id="card-2" className="card">
                  <Slide>
                    <PrevNextIcon />
                    <img src={service.imgSrc} alt={service.title} />
                    <PrevNextIcon />
                  </Slide>
                </ImagesCase>
                <TextsCase>
                  <ContentTextsCase id="card-3" className="card">
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>

                    <button
                      id="information"
                      onClick={() => setOpenDialog(index)}
                    >
                      Saiba Mais
                    </button>

                    {openDialog === index && (
                      <div
                        className="modal-overlay"
                        onClick={() => setOpenDialog(null)} // Fecha ao clicar fora
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: 1000,
                        }}
                      >
                        <dialog
                          className="modal-dialog"
                          onClick={(e) => e.stopPropagation()} // Impede o clique dentro do diálogo de fechá-lo
                          open
                          style={{
                            padding: "1em",
                            border: "none",
                            borderRadius: "8px",
                            maxWidth: "500px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <h6 className="modal-title">{service.title}</h6>
                          <p className="modal-description">
                            {service.modalDescription}
                          </p>
                          <button
                            className="modal-close"
                            onClick={() => setOpenDialog(null)}
                          >
                            Fechar
                          </button>
                        </dialog>
                      </div>
                    )}
                  </ContentTextsCase>
                </TextsCase>
              </Case>
            ))}
          </CaseContainer>
        </PortfolioContainer>
      </PortfolioSection>
    </Container>
  );
}
