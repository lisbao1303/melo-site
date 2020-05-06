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
          name: "Parafusos de eixo quadrado",
          src: "./../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
          onClick: "/ferramentas/parafusos/quadrado",
          color: "primary",
        },
        {
          name: "Parafusos de eixo redondo",
          src:
            "./../Imagens-largemedia/4parafusos/redondo/parafuso-raimann.jpg",
          onClick: "/ferramentas/parafusos/redondo",
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
