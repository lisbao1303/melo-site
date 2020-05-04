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
const Cabecote = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "FACA EM TITÂNIO 600X30X3 M35",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-7 <br /> DISPONIBILIDADE:
          PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca em Titânio M35, versátil para qualquer tipo de madeira, Com
          dureza próxima a wídea, mais qualificada para trabalhos em madeiras
          duras. A afiação é feita em rebolos convencionais, não sendo
          necessário o uso de rebolo diamantado.Sua estrutura Bimetálica de alta
          resistência do titânio M35, faz com que esta faca tenha um desempenho
          perto de wídea com uma flexibilidade que a torna imune a quebra em sua
          estrutura, o que ocorre facilmente em facas de wídea.
        </div>
      ),
      description: (
        <div>
          Faca para desengrosso, eixo redondo e desempenadeira.
          <br />
          Comprimento: 600mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
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
                    <a href="/ferramentas/facas">Facas</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={match.url}>Desempenadeira</a>
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
                  <BreadcrumbItem active>Desempenadeira</BreadcrumbItem>
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

export default Cabecote;
