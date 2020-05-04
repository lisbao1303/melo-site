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
      name: "CABEÇOTE PORTA LIXA EM BORRACHA",
      src: "./../../Imagens-largemedia/2pagecabecote/02.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU967398 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Cabeçote de borracha rolete fixo porta lixa.</div>,
      description: (
        <div>
          Diâmetro 80mm
          <br />
          Altura 80mm
          <br />
          Furo 30mm
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
                    <a href={match.url}>Cabeçotes</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    {props.match.params.productId}
                  </BreadcrumbItem>
                </Breadcrumb>{" "}
                <Product data={productsData} {...props} />
              </div>
            )}
          />
          <Route
            exact
            path={match.url}
            render={() => (
              <div className="PageCard">
                <Row>{linkList}</Row>
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
