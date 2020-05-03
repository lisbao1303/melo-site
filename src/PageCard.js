import React from "react";
import CardClick from "@/CardClick";
import { Row } from "reactstrap";
class PageCard extends React.Component {
  render() {
    let catCards = this.props.cards.categorias.map((categoria, i) => {
      return (
        <CardClick
          key={i}
          name={categoria.name}
          src={categoria.src}
          onClick={categoria.onClick}
          color={categoria.color}
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
