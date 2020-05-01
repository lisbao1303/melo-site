import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Sendmail() {
  return (
    <Form name="contact" action="/" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <Form.Group>
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" name="name" placeholder="nome" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Telefone:</Form.Label>
        <Form.Control type="phonenumber" name="phone" placeholder="()" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" placeholder="@" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Assunto:</Form.Label>
        <Form.Control type="text" name="subject" placeholder=".." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mensagem:</Form.Label>
        <Form.Control as="textarea" rows="3" name="message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Sendmail;
