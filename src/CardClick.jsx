import React from "react";
import { Card, CardBody, Col, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const CardClick = (props) => (
  <Col sm={4} className="mb-4">
    <Link style={{ cursor: "pointer" }} to={props.onClick}>
      <Card className="card-item" color={props.color}>
        <div className="embed-responsive embed-responsive-4by3">
          <img
            className="card-img-top embed-responsive-item"
            src={props.src}
            alt=""
          />
        </div>
        <CardBody>
          <CardText className="text-white">{props.name}</CardText>
        </CardBody>
      </Card>
    </Link>
  </Col>
);

export default CardClick;
