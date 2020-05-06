import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  CardImg,
  CardHeader,
  Button,
} from "reactstrap";
import "./App.css";
const Product = ({ match, data }) => {
  // eslint-disable-next-line
  var product = data.find((p) => p.id == match.params.productId);
  var productData;

  if (product)
    productData = (
      <div className="produto">
        <div color="primary" className="text-primary">
          <h3> {product.name} </h3>
        </div>
        <Row>
          <Col sm={8} className="mb-4">
            <Card className="card-item mb-4" color="">
              <CardImg
                className="card-img-top embed-responsive-item"
                src={product.src}
                alt=""
              />
            </Card>

            <Card
              className="card-item d-none d-sm-block text-white mb-4 bg-info"
              color=""
            >
              <CardHeader>
                <b>Informações Técnicas</b>
              </CardHeader>
              <CardBody>
                <p>{product.description}</p>
              </CardBody>
            </Card>
            <Button color="success" href="/contato">
              Solicite um Orçamento
            </Button>
          </Col>
          <Col sm={4} className="  mh-100 mb-4">
            <Card className="mb-4 bg-secondary">
              {" "}
              <CardBody>
                <p>{product.status}</p>
              </CardBody>
            </Card>
            <Card className="card-item  bg-warning" color="">
              <CardHeader>
                <b>Descrição</b>
              </CardHeader>
              <CardBody>
                <p>{product.desc2}</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm={8} className=" mb-4">
            <Card className="card-item d-sm-none text-white bg-info" color="">
              <CardHeader>
                <b>Informações Técnicas</b>
              </CardHeader>
              <CardBody>
                <p>{product.description}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  else productData = <h2> Sorry. Product doesn't exist </h2>;

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Product;
