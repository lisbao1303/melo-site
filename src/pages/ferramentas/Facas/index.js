import React from "react";
import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "@/HeadLogo";
import ActionBar from "@/ActionBar";
import Footer from "@/Footer";
import PageCard from "@/PageCard";

class Brocas extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        {
          name: "Faca Desempenadeira ",
          src: "./../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
          onClick: "/ferramentas/facas/desempeno",
          color: "primary",
        },
        {
          name: "Faca Desengrosso ",
          src: "./../Imagens-largemedia/3pagefacas/desengrosso/dex3.png",
          onClick: "/ferramentas/facas/desengrosso",
          color: "primary",
        },
        {
          name: "Faca Makita ",
          src:
            "./../Imagens-largemedia/3pagefacas/makita/Faca makita 82x28x3 Aço (par) Cortec.jpg",
          onClick: "/ferramentas/facas/makita",
          color: "primary",
        },
      ],
    };
  }
  render() {
    return (
      <div className="conteinerprincipal">
        <div className="campocentral">
          <div className="catalogo">
            <div>
              <HeadLogo />
            </div>
            <div>
              <ActionBar text="Ferramentas" icon={faToolbox} />
            </div>
            <div>
              <PageCard cards={this.state} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Brocas;
