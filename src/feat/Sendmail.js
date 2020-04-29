import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Sendmail() {
  return (
    <Form name="contact" action="/" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <Form.Group>
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nome" />
      </Form.Group>
      <p>
        <label>
          Seu Email: <input type="email" name="email" />
        </label>
      </p>
      <Form.Group>
        <Form.Label>Assunto:</Form.Label>
        <Form.Control type="text" name="subject" placeholder="Assunto" />
      </Form.Group>
      <p>
        <label>
          Mensagem: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <p>
        <Button variant="primary" type="submit">
          Enviar email
        </Button>
      </p>
    </Form>
  );
}

export default Sendmail;
