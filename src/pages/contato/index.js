import React from "react";
import { Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Card } from "reactstrap";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";

const Contato = ({ match }) => {
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
              <Card className="cardcontato" color="secondary">
                <div>
                  <Route
                    exact
                    path={match.url}
                    render={() => (
                      <Form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <FormGroup>
                          <Label>Nome:</Label>
                          <Input
                            type="text"
                            name="name"
                            bsSize="sm"
                            placeholder="Nome ou Empresa"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Telefone:</Label>
                          <Input
                            type="phonenumber"
                            name="phone"
                            bsSize="sm"
                            placeholder=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Email:</Label>
                          <Input
                            type="email"
                            name="email"
                            bsSize="sm"
                            placeholder=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Mensagem:</Label>
                          <Input
                            type="textarea"
                            name="message"
                            bsSize="sm"
                            id="exampleText"
                          />
                        </FormGroup>

                        <Button color="success" type="submit">
                          Enviar
                        </Button>
                      </Form>
                    )}
                  />

                  <Route
                    path={`${match.url}/:i`}
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
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
