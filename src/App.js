import React, { useState } from "react";
import "./App.css";
import Sendmail from "./feat/Sendmail";
function App() {
  const [teste, settest] = useState("esperando comando");

  return (
    <div className="conteinerprincipal">
      <h1>O estado irá mudar: {teste}</h1>
      <button type="button" onClick={() => settest("mudança de estado")}>
        clique aqui
      </button>
      <Sendmail />
    </div>
  );
}

export default App;
