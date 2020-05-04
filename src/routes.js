import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Ferramentas from "./pages/ferramentas";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

import Products from "./pages/ferramentas/BrocasEscariadores/Products";
import Cabecote from "./pages/ferramentas/Cabecote/Cabecote";
import Facas from "./pages/ferramentas/Facas";
import Fdesempeno from "./pages/ferramentas/Facas/Desempeno/Fdesempeno";
import Fdesengrosso from "./pages/ferramentas/Facas/Desengrosso/Fdesengrosso";
import Fmakita from "./pages/ferramentas/Facas/Makita/Fmakita";
import Parafusos from "./pages/ferramentas/Parafusos";
import Pquadrado from "./pages/ferramentas/Parafusos/Quadrado/Pquadrado";
import Predondo from "./pages/ferramentas/Parafusos/Redondo/Predondo";
import Rebolos from "./pages/ferramentas/Rebolos/Rebolos";
import Serras from "./pages/ferramentas/SerraCircular/Serras";
import Serrafitas from "./pages/ferramentas/Serrafita/Serrafitas";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ferramentas" exact component={Ferramentas} />
        <Route path="/ferramentas/brocasescariadores" component={Products} />
        <Route path="/ferramentas/cabecotes" component={Cabecote} />
        <Route path="/ferramentas/facas" exact component={Facas} />
        <Route path="/ferramentas/facas/desempeno" component={Fdesempeno} />
        <Route path="/ferramentas/facas/desengrosso" component={Fdesengrosso} />
        <Route path="/ferramentas/facas/makita" component={Fmakita} />
        <Route path="/ferramentas/parafusos" exact component={Parafusos} />
        <Route path="/ferramentas/parafusos/quadrado" component={Pquadrado} />
        <Route path="/ferramentas/parafusos/redondo" component={Predondo} />
        <Route path="/ferramentas/rebolos" component={Rebolos} />
        <Route path="/ferramentas/serra" component={Serras} />
        <Route path="/ferramentas/serrafita" component={Serrafitas} />
        <Route path="/contato/success" component={Sobre} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
