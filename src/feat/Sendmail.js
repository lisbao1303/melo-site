import React from "react";

function Sendmail() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Assunto: <input type="text" name="subject" />
        </label>
      </p>
      <p></p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <div className="field">
          <input
            type="file"
            name="myfile"
            id="myfile"
            placeholder="Upload File"
            rows="7"
          />
        </div>
      </p>
      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

export default Sendmail;
