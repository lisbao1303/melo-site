import React from "react";
import CardClick from "./CardClick";
import { Row } from "reactstrap";
class PageCard extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        {
          name: "Brocas e escariadores",
          src: "./Imagens-largemedia/Broca/DSC_1925.JPG",
          onClick: "/ferramentas/brocasescariadores",
        },
        {
          name: "Cabeçotes",
          src: "./Imagens-largemedia/Cabeçote porta lixa/DSC_1914.JPG",
          onClick: "/ferramentas/cabecotes",
        },
        {
          name: "Facas",
          src: "./Imagens-largemedia/Faca/DSC_1889.JPG",
          onClick: "/ferramentas/facas",
        },
        {
          name: "Parafusos",
          src: "./Imagens-largemedia/Parafuso-1.12-Mazutti-com-porca-Fepam.jpg",
          onClick: "/ferramentas/parafusos",
        },
        {
          name: "Rebolos",
          src: "./Imagens-largemedia/Rebolo Diamantado/DSC_1933.JPG",
          onClick: "/ferramentas/rebolos",
        },
        {
          name: "Serra circular",
          src:
            "./Imagens-largemedia/Disco de serra circular 300x96Z RT F.30 FREUD.jpg",
          onClick: "/ferramentas/serra",
        },
        {
          name: "Serrafita",
          src: "./Imagens-largemedia/serra-fita-açougue.png",
          onClick: "/ferramentas/serrafita",
        },
      ],
    };
  }
  render() {
    let catCards = this.state.categorias.map((categoria, i) => {
      return (
        <CardClick
          key={i}
          name={categoria.name}
          src={categoria.src}
          onClick={categoria.onClick}
          color="primary"
        />
      );
    });
    return (
      <div className="PageCard">
        <Row>{catCards}</Row>
      </div>
    );
  }
}
export default PageCard;
