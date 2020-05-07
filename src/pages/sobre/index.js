import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Row, CardImg, Card, Col, CardBody, CardFooter } from "reactstrap";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";

function Sobre() {
  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Sobre" icon={faMapMarkerAlt} />
          </div>
          <div>
            <div className="titlecontato">CORTEC Ferramentas</div>
            <Row className="ml-2 mr-2">
              <Col sm={4}>
                <Card className="card-item mb-2" color="">
                  <CardImg
                    className="card-img-top embed-responsive-item"
                    src="./Imagens-largemedia/cortec.png"
                    alt=""
                  />
                </Card>
              </Col>
              <Col sm={8}>
                <Card className=" mb-5" color="primary">
                  <CardBody className="text-justify text-white">
                    Somos uma importadora com parcerias comerciais na Europa e
                    parte da Ásia há mais de vinte anos no mercado. Distribuímos
                    para o Brasil e toda America Latina através de nosso CD,
                    situado em São Paulo. Trabalhamos com toda linha cortante
                    para o setor moveleiro como serras circulares, facas ,
                    fresas, cabeçotes, serra fita, escariadores e muito mais.{" "}
                    <br />
                    Email : cortecferramentas@gmail.com
                  </CardBody>
                  <CardFooter className="bg-secondary">
                    Email:
                    <a className="text-primary" href="/contato">
                      {" "}
                      cortecferramentas@gmail.com
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
