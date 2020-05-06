import React from "react";
import { Route } from "react-router-dom";
import "@/App.css";
import { Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import CardClick from "@/CardClick";
import HeadLogo from "@/HeadLogo";
import ActionBar from "@/ActionBar";
import Footer from "@/Footer";
import Product from "@/Product";
const Predondo = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "PARAFUSO RAIMANN FEPAM (130.10)",
      src:
        "./../../../Imagens-largemedia/4parafusos/redondo/parafuso-raimann.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU119669 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote redondo Fepam.</div>,
      description: (
        <div>
          Raimann
          <br />1 peça
        </div>
      ),
    },
    {
      id: 2,
      name: "PARAFUSO OMIL FEPAM (130.12)",
      src: "./../../../Imagens-largemedia/4parafusos/redondo/Parafuso-Omil.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU582591 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote redondo Omil.</div>,
      description: (
        <div>
          Omil
          <br />1 peça
        </div>
      ),
    },
    {
      id: 3,
      name: "PARAFUSO DAMBROZ FEPAM (130.11)",
      src:
        "./../../../Imagens-largemedia/4parafusos/redondo/parafuso-dambroz.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU935027 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote redondo</div>,
      description: (
        <div>
          Dambroz
          <br />1 peça
        </div>
      ),
    },

    //Rest of the data has been left out for code brevity
  ];
  /* Create an array of `<li>` items for each product */
  const linkList = productsData.map((product, i) => {
    return (
      <CardClick
        key={i}
        name={product.name}
        src={product.src}
        onClick={`${match.url}/${product.id}`}
        color={product.color}
      />
    );
  });

  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Ferramentas" icon={faToolbox} />
          </div>

          <Route
            path={`${match.url}/:productId`}
            render={(props) => (
              <div>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="/ferramentas/parafusos">Parafusos</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={match.url}>Redondo</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    {props.match.params.productId}
                  </BreadcrumbItem>
                </Breadcrumb>
                <Product data={productsData} {...props} />
              </div>
            )}
          />
          <Route
            exact
            path={match.url}
            render={() => (
              <div>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="/ferramentas/parafusos">Parafusos</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Redondo</BreadcrumbItem>
                </Breadcrumb>
                <div className="PageCard">
                  <Row>{linkList}</Row>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Predondo;
