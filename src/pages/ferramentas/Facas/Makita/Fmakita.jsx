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
const Fmakita = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "FACA MAKITA 82X28X3 WÍDEA",
      src:
        "./../../../Imagens-largemedia/3pagefacas/makita/Faca makita 82X28X3 Wídea (PAR).jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU591612 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca Indicada para aparelhar e rebaixar portas, pranchas, esquadrias e
          outros.
        </div>
      ),
      description: (
        <div>
          Comprimento: 82mm
          <br />
          Largura: 28mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 par
        </div>
      ),
    },
    {
      id: 2,
      name: "FACA MAKITA 82X28X3 AÇO",
      src:
        "./../../../Imagens-largemedia/3pagefacas/makita/Faca makita 82x28x3 Aço (par) Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU150680 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca Indicada para aparelhar e rebaixar portas, pranchas, esquadrias e
          outros.
        </div>
      ),
      description: (
        <div>
          Comprimento: 82mm
          <br />
          Largura: 28mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Aço rápido HSS
          <br />1 par
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
                    <a href="/ferramentas/facas">Facas</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={match.url}>Makita</a>
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
                    <a href="/ferramentas/facas">Facas</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Makita</BreadcrumbItem>
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

export default Fmakita;
