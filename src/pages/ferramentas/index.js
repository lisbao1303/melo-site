import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "@/HeadLogo";
import ActionBar from "@/ActionBar";
import Footer from "@/Footer";
import PageCard from "@/PageCard";
class Ferramentas extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        {
          name: "Brocas e escariadores",
          src: "./Imagens-largemedia/broca.jpg",
          onClick: "/ferramentas/brocasescariadores",
          color: "primary",
        },
        {
          name: "Cabeçotes",
          src: "./Imagens-largemedia/cabecote.jpg",
          onClick: "/ferramentas/cabecotes",
          color: "primary",
        },
        {
          name: "Facas",
          src: "./Imagens-largemedia/faca.png",
          onClick: "/ferramentas/facas",
          color: "primary",
        },
        {
          name: "Parafusos",
          src: "./Imagens-largemedia/parafuso.jpg",
          onClick: "/ferramentas/parafusos",
          color: "primary",
        },
        {
          name: "Rebolos",
          src: "./Imagens-largemedia/rebolo.jpg",
          onClick: "/ferramentas/rebolos",
          color: "primary",
        },
        {
          name: "Serra circular",
          src: "./Imagens-largemedia/serra.png",
          onClick: "/ferramentas/serra",
          color: "primary",
        },
        {
          name: "Serrafita",
          src: "./Imagens-largemedia/serrafita.PNG",
          onClick: "/ferramentas/serrafita",
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
            <PageCard cards={this.state} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Ferramentas;
