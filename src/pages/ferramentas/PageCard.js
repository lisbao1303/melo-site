import React from "react";
import CardClick from "./CardClick";
import { Col, Row, CardColumns } from "reactstrap";
class PageCard extends React.Component {
  state = { count: 0 };

  cardClicked = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div className="PageCard">
        <Row>
          <CardClick
            name="cabeça"
            src="./Kyle_Walker.jpg"
            onClick={this.cardClicked}
          />
          <CardClick
            name="Serras"
            src="./300X96 38º.jpg"
            onClick={this.cardClicked}
          />
          <CardClick
            name="cabeça"
            src="./Kyle_Walker.jpg"
            onClick={this.cardClicked}
          />
          <CardClick
            name="cabeça"
            src="./Kyle_Walker.jpg"
            onClick={this.cardClicked}
          />
        </Row>
      </div>
    );
  }
}
export default PageCard;
