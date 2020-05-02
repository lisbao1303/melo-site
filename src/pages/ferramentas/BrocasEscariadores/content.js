import React from "react";
import CardClick from "./../CardClick";
import { Row } from "reactstrap";
class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        {
          name: "Brocas e escariadores",
          src: "./../Imagens-largemedia/Broca/DSC_1925.JPG",
          onClick: "",
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
export default Content;
