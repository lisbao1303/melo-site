import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "gabriel.lisbao@gmail.com",
    pass: "youcan'tseeme",
  },
});

function App() {
  const [teste, settest] = useState("esperando comando");
  return (
    <div className="conteinerprincipal">
      <h1>O estado irá mudar: {teste}</h1>
      <button type="button" onClick={() => settest("mudança de estado")}>
        clique aqui
      </button>
      <button
        type="button"
        onClick={() =>
          transporter
            .sendMail({
              from: "Testa <gabriel.lisbao@gmail.com>",
              to: "gabriel.lisbao@gmail.com",
              subject: "Assubnto?",
              text: "texto do meu email aqui ululu",
              html: "<h1>CARAI mano</h1>",
            })
            .then((message) => {
              console.log(message);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        clique aqui
      </button>
    </div>
  );
}

export default App;
