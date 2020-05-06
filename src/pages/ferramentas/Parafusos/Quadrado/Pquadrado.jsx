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
const Pquadrado = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "PARAFUSO 1.1/4 RAIMANN COM PORCA FEPAM (130.01)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU866210 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Raimann</div>,
      description: (
        <div>
          Porca 1.1/4
          <br />1 peça
        </div>
      ),
    },
    {
      id: 2,
      name: "PARAFUSO 1.1/4 OMIL COM PORCA FEPAM (130.06)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU211613 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Omil</div>,
      description: (
        <div>
          Porca 1.1/4
          <br />1 peça
        </div>
      ),
    },
    {
      id: 3,
      name: "PARAFUSO 1.1/4 INVICTA NOVO COM PORCA FEPAM (130.22)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU289538 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Invicta</div>,
      description: (
        <div>
          Porca 1.1/4
          <br />1 peça
        </div>
      ),
    },
    {
      id: 4,
      name: "PARAFUSO 1.1/4 DAMBROZ COM PORCA FEPAM (130.03)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU976731 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Dambroz</div>,
      description: (
        <div>
          Porca 1.1/4
          <br />1 peça
        </div>
      ),
    },
    {
      id: 5,
      name: "PARAFUSO 1.1/2 RAIMANN COM PORCA FEPAM (130.01)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. 1.2 <br /> DISPONIBILIDADE: PRONTA ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Raimann</div>,
      description: (
        <div>
          Porca 1.1/2
          <br />1 peça
        </div>
      ),
    },
    {
      id: 6,
      name: "PARAFUSO 1.1/2 MAZUTTI COM PORCA FEPAM (130.09)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU830404 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Mazutti </div>,
      description: (
        <div>
          Porca 1.1/2
          <br />1 peça
        </div>
      ),
    },
    {
      id: 7,
      name: "PARAFUSO 1.1/2 INVICTA COM PORCA FEPAM (130.02)",
      src: "./../../../Imagens-largemedia/4parafusos/quadrado/parax7.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU936970 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Parafuso para cabeçote quadrado Invicta </div>,
      description: (
        <div>
          Porca 1.1/2
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
                    <a href={match.url}>Quadrado</a>
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
                  <BreadcrumbItem active>Quadrado</BreadcrumbItem>
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

export default Pquadrado;
