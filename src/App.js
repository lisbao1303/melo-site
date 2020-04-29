import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeadLogo from "./feat/HeadLogo";
import ActionBar from "./feat/ActionBar";
import Conteudo from "./feat/Conteudo";
function App() {
  return (
    <div className="conteinerprincipal">
      <div className="catalogo">
        <div>
          <HeadLogo />
        </div>
        <div>
          <ActionBar />
        </div>
        <div>
          <Conteudo />
        </div>
      </div>
    </div>
  );
}

export default App;
