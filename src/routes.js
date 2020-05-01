import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Ferramentas from "./pages/ferramentas";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ferramentas" component={Ferramentas} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
