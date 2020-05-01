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
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Cabeçotes",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Facas",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Parafusos",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Rebolos",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Serra circular",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
        {
          name: "Serrafita",
          src: "./Kyle_Walker.jpg",
          onClick: "",
        },
      ],
    };
  }
  render() {
    let catCards = this.state.categorias.map((categoria) => {
      return (
        <CardClick
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
