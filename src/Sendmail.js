import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Sendmail() {
  return (
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
        <Input type="phonenumber" name="phone" bsSize="sm" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input type="email" name="email" bsSize="sm" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label>Mensagem:</Label>
        <Input type="textarea" name="message" bsSize="sm" id="exampleText" />
      </FormGroup>

      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <Button color="success" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Sendmail;
