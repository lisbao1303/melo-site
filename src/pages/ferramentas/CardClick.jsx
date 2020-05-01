import React from "react";
import { Card, CardBody, Col, CardTitle, CardImg } from "reactstrap";

const CardClick = (props) => (
  <Col sm={4} className="mb-4">
    <a style={{ cursor: "pointer" }} onClick={props.onClick}>
      <Card className="card-item" color="primary">
        <div class="embed-responsive embed-responsive-4by3">
          <img
            className="card-img-top embed-responsive-item"
            top
            width="100%"
            height="100%"
            src={props.src}
            alt="Card image cap"
          />
        </div>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
      </Card>
    </a>
  </Col>
);

export default CardClick;
