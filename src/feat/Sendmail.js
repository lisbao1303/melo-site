import React from "react";

function Sendmail() {
  return (
    <form name="contact" action="/" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Nome: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Seu Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Assunto: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Mensagem: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
  );
}

export default Sendmail;
