import React from "react";
import { Route } from "react-router-dom";
import "@/App.css";
import { Row } from "reactstrap";
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
      name: "cabecote",
      src: "./../Imagens-largemedia/1pagebe/03.jpg",
      onClick: "/ferramentas/brocasescariadores/",
      color: "secondary",
      description: "decs",
      status: "lulu",
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
        onClick={`${match.url}/${product.name}`}
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
            render={(props) => <Product data={productsData} {...props} />}
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
