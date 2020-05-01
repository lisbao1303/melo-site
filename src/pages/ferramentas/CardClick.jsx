import React from "react";
import { Card, CardBody, Col, CardText } from "reactstrap";

const CardClick = (props) => (
  <Col sm={4} className="mb-4">
    <a style={{ cursor: "pointer" }} onClick={props.onClick}>
      <Card className="card-item" color={props.color}>
        <div class="embed-responsive embed-responsive-4by3">
          <img
            className="card-img-top embed-responsive-item"
            top
            src={props.src}
            alt=""
          />
        </div>
        <CardBody>
          <CardText>{props.name}</CardText>
        </CardBody>
      </Card>
    </a>
  </Col>
);

export default CardClick;
