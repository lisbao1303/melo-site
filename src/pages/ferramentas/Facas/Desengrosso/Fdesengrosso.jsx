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
const Fdesengrosso = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "FACA P/ DESENGROSSO EM WÍDEA 600X75X9 CM (PAR)",
      src: "./../../../Imagens-largemedia/3pagefacas/desengrosso/dex3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU112235-3 <br /> DISPONIBILIDADE:
          PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca indicada para plaina desengrossadeira. Possui corpo produzido em
          Wídea, oferecendo resistência e durabilidade. Ideal para aplainar
          madeira.
        </div>
      ),
      description: (
        <div>
          Eixo quadrado em wídea
          <br />
          Comprimento: 600mm
          <br />
          Largura: 75mm
          <br />
          Espessura: 9mm
          <br />
          1 par
          <br />4 rasgos para fixação
        </div>
      ),
    },
    {
      id: 2,
      name: "FACA P/ DESENGROSSO EM WÍDEA 500X75X9 CM (PAR)",
      src: "./../../../Imagens-largemedia/3pagefacas/desengrosso/dex3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU112235-2 <br /> DISPONIBILIDADE:
          PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca indicada para plaina desengrossadeira. Possui corpo produzido em
          Wídea, oferecendo resistência e durabilidade. Ideal para aplainar
          madeira.
        </div>
      ),
      description: (
        <div>
          Eixo quadrado em wídea
          <br />
          Comprimento: 500mm
          <br />
          Largura: 75mm
          <br />
          Espessura: 9mm
          <br />
          1 par
          <br />4 rasgos para fixação
        </div>
      ),
    },
    {
      id: 3,
      name: "FACA P/ DESENGROSSO EM WÍDEA 400X75X9 CM (PAR)",
      src: "./../../../Imagens-largemedia/3pagefacas/desengrosso/dex3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU112235 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca indicada para plaina desengrossadeira. Possui corpo produzido em
          Wídea, oferecendo resistência e durabilidade. Ideal para aplainar
          madeira.
        </div>
      ),
      description: (
        <div>
          Eixo quadrado em wídea
          <br />
          Comprimento: 400mm
          <br />
          Largura: 75mm
          <br />
          Espessura: 9mm
          <br />
          1 par
          <br />4 rasgos para fixação
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
                    <a href={match.url}>Desengrosso</a>
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
                  <BreadcrumbItem active>Desengrosso</BreadcrumbItem>
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

export default Fdesengrosso;
