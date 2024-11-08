import { Container, Main, ConteudoInicio, BotaoCta } from "./styles";


export function Start() {
  return (
    <Container>
      <Main id="inicio">
        <div className="container-inicio">
          <ConteudoInicio>
            <div className="titulo-inicio">
              <h1><span id="classin">IN</span><span id="classin-2">N</span>OVATE</h1>
              <h1 className="destaque-inicio">Sua saúde, nossa prioridade</h1>
            </div>
            <div
              className="paragrafo-inicio">
              <p>
              Oferecemos tratamentos personalizados para sua saúde e qualidade de vida. 
              </p>
            </div>
            <BotaoCta>
              <a  target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5521995435330&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!">Fale conosco!</a>
              
            </BotaoCta>
          </ConteudoInicio>
          
        </div>
      </Main>
    </Container>
  );
}
