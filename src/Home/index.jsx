import { Container } from "./styles";
import { useState } from "react";
import { BackToTopButton } from "../Components/BackToTopButton";
import { WhatsAppButton } from "../Components/WhatsAppButton";
import { Header } from "../Components/Header";
import { Start } from "../Components/Start";
import { On } from "../Components/On";
import { Section } from "../Components/Section";
import { Services} from "../Components/Services";
import { Portifolio } from "../Components/Portifolio";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { ActionButton } from "../Controllers/ActionButton/ActionButton";
import { HeadlineScroll } from "../Controllers/SlideSobre/SlideSobre";

export function Home (){
  const [openDialog, setOpenDialog] = useState(null);
  return(
    <Container>
      <Header/>
      <BackToTopButton />
      <Start />
      <On />
      <Section></Section>
      <Services />
      <HeadlineScroll/>
      <Portifolio><div className="modal-overlay" onClick={() => setOpenDialog(null)}></div></Portifolio>
      <Contact></Contact>
      <Footer />
      <WhatsAppButton />
      <ActionButton />
    </Container>

  )
}