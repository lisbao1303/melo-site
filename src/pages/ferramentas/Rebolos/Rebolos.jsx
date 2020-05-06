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
const Rebolos = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "REBOLO DIAMANTADO FS61",
      src: "./../../../Imagens-largemedia/5rebolos/rebolo.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU130721 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Rebolo diamantado para afiação</div>,
      description: <div>FS61</div>,
    },
    {
      id: 2,
      name: "REBOLO COM DIAMANTADO 6A2 50% 125X5X3X20P/ AFIAR FACA EM WIDIA",
      src: "./../../../Imagens-largemedia/5rebolos/a2.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. REBOLO <br /> DISPONIBILIDADE: ATÉ 20 DIAS
          ÚTEIS
        </div>
      ),
      desc2: (
        <div>
          Rebolo com diamante podem ser facilmente aplicados em materiais como
          metal duro(widea), são fabricados com porosidade controlada, chegando
          por vezes a 50% do volume da camada abrasiva.
        </div>
      ),
      description: (
        <div>
          Diâmetro: 125/5/3
          <br />
          Furo: 20mm
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
                    <a href="/ferramentas/rebolos">Rebolos</a>
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

export default Rebolos;
