import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Card } from "reactstrap";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";
import Sendmail from "@/Sendmail";

function Contato() {
  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Contato" icon={faEnvelopeOpenText} />
          </div>
          <div>
            <div className="titlecontato">Solicite um Orçamento</div>
            <div className="formulario">
              <Route
                exact
                path={match.url}
                render={() => (
                  <Card className="cardcontato" color="secondary">
                    <Sendmail />
                  </Card>
                )}
              />
              <Route
                path={`${match.url}/enviado`}
                render={(props) => (
                  <div className="formulariosuc">
                    <div className="titulosucesso">
                      <h3>Formulário Enviado!</h3>
                      <div className="msgsucesso">
                        Obrigado, por contatar-nos.
                        <br />
                        Em breve entraremos em contato.
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
