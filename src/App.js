import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [teste, settest] = useState("esperando comando");
  return (
    <div className="conteinerprincipal">
      <h1>O estado irá mudar: {teste}</h1>
      <button type="button" onClick={() => settest("mudança de estado")}>
        clique aqui
      </button>
    </div>
  );
}

export default App;
