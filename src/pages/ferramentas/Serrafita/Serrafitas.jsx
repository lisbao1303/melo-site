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
const Serrafitas = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 5/8 0,7 COM 6 METROS 4 DENTES POR POLEGADAS",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. 6M <br /> DISPONIBILIDADE: PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>Serra Fita 5/8 0,7 Com 6 Metros Cortec 4 Dentes por polegadas</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 5/8" com 6 metros
          <br />
          Espessura: 0,7mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 2,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 5/8 0,7 COM 30 METROS 4 DENTES POR POLEGADAS",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU426487 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Serra Fita 5/8 0,7 Com 30 Metros Cortec 4 Dentes por polegadas
        </div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 5/8" com 30 metros
          <br />
          Espessura: 0,7mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 3,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 5/8 0,6 COM 30 METROS 4 DENTES POR POLEGADA",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU119401 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>Serra Fita 5/8 Com 30 Metros Cortec 4 Dentes por polegada</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 5/8" com 30 metros
          <br />
          Espessura: 0,6mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 4,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 5/8 0,6 COM 3,10 METROS 4 DENTES POR POLEGADA",
      src: "./../../../Imagens-largemedia/7serrafita/fitax3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. 3,10M
          <br /> DISPONIBILIDADE: ATÉ 5 DIAS ÚTEIS
        </div>
      ),
      desc2: (
        <div>
          Serra Fita 5/8 0,6 Com 3,10 Metros Cortec 4 Dentes por polegada
        </div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 5/8" com 30 metros
          <br />
          Espessura: 0,6mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 5,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 3/8 0,6 COM 30 METROS 4 DENTES POR POLEGADA",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU521694 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>Serra Fita 3/8 Com 30 Metros Cortec 4 Dentes por polegada</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 3/8" com 30 metros
          <br />
          Espessura: 0,6mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 6,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 3/4 COM 30 METROS  3 DENTES POR POLEGADA ",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU835120 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>Serra Fita 3/4 Com 30 Metros Cortec 3 Dentes por polegada</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 3/4" com 30 metros
          <br />
          Espessura: 0,7mm
          <br />
          Dentes por polegada(Dpp): 3
          <br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 7,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 3/4 COM 3,8 METROS 3 DENTES POR POLEGADA COPIA",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU835120-3 <br /> DISPONIBILIDADE: ATÉ 5
          DIAS ÚTEIS
        </div>
      ),
      desc2: (
        <div>Serra Fita 3/4 Com 3,8 Metros Cortec 3 Dentes por polegada</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 3/4" com 3,8 metros
          <br />
          Espessura: 0,7mm
          <br />
          Dentes por polegada(Dpp): 3<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 8,
      name: "SERRA FITA PARA MADEIRA TEMPERADA 1/4 COM 30 METROS",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU864386 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Serra Fita 1/4 Com 30 Metros Cortec</div>,
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 1/4" com 30 metros
          <br />
          Espessura: 0,5mm
          <br />
          Dentes por polegada(Dpp): Escolha o tamanho
          <br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 9,
      name: "SERRA FITA PARA MADEIRA TEMPERADA 1/2 COM 30 METROS",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU469096 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Serra Fita 1/2 Com 30 Metros Cortec</div>,
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 1/2" com 30 metros
          <br />
          Espessura: 0,6mm
          <br />
          Dentes por polegada(Dpp): Escolha o tamanho
          <br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 10,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 1/2 0,6 4 DENTES POR POLEGADA COM 3,10 METROS ",
      src: "./../../../Imagens-largemedia/7serrafita/fitax3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. SERRA 3,10 <br /> DISPONIBILIDADE: ATÉ 5
          DIAS ÚTEIS
        </div>
      ),
      desc2: <div>Serra Fita 1/2 0,6 Com 3,10 Metros Cortec</div>,
      description: (
        <div>
          Serra fita <br />
          SFR 1/2" com 3,10 metros
          <br />
          Espessura: 0,6mm
          <br />
          Dentes por polegada(Dpp): 4<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 11,
      name: "SERRA FITA PARA MADEIRA TEMPERADA 1 1/4 0,9 COM 30 METROS",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU175763 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Serra Fita 1' 1/4 0,9 Com 30 Metros Cortec</div>,
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 1.1/4" com 30 metros
          <br />
          Espessura: 0,9mm
          <br />
          Dentes por polegada(Dpp): Escolha o tamanho
          <br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 12,
      name:
        "SERRA FITA PARA MADEIRA TEMPERADA 1 0,7 COM 30 METROS 3 DENTES POR POLEGADA",
      src: "./../../../Imagens-largemedia/7serrafita/fitax10.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU138219 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>Serra Fita 1' 0,7 Com 30 Metros Cortec 3 dentes por polegada</div>
      ),
      description: (
        <div>
          Serra fita rolo
          <br />
          SFR 1" com 30 metros
          <br />
          Espessura: 0,7mm
          <br />
          Dentes por polegada(Dpp): 3<br />
          Afiada, temperada e travada
        </div>
      ),
    },
    {
      id: 13,
      name: "SERRA FITA DE ESPUMA - LÂMINA SEM DENTE AFIADA 2 LADOS",
      src: "./../../../Imagens-largemedia/7serrafita/Serra Fita de Espuma.jpeg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU816665 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: <div>Serra Fita de Espuma - Lâmina Sem Dente Afiada 1 Lado</div>,
      description: (
        <div>
          Serra fita por metro
          <br />
          Espessura: 0,6mm
          <br />
          Polegadas: Escolha o tamanho
          <br />
          Afiada de 2 lados
          <br />
          Emenda pronta
        </div>
      ),
    },
    {
      id: 14,
      name: "SERRA FITA DE AÇOUGUE",
      src: "./../../../Imagens-largemedia/7serrafita/fitax3.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU105381 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Serra Fita De Açougue, afiada, temperada e travada. Vendida por metro
          e já vai com a emenda.
        </div>
      ),
      description: (
        <div>
          Serra fita por metro
          <br />
          Espessura: 0,6mm
          <br />
          Polegadas: Escolha o tamanho
          <br />
          Afiada, temperada e travada
          <br />
          Emenda pronta
        </div>
      ),
    },
    {
      id: 15,
      name: "SERRA FITA BIMETÁLICA PARA MADEIRA 1/2 - 5,80M",
      src: "./../../../Imagens-largemedia/7serrafita/serrafitax3.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. 5,8 <br /> DISPONIBILIDADE: ATÉ 5 DIAS ÚTEIS
        </div>
      ),
      desc2: (
        <div>
          Serra fita bimetálica para madeira, ideal para produção em escala,
          chega a durar 10 vezes mais o corte que uma serra fita de carbono
          temperada. Ela vem 13mm largura em duas versões, para metal mecânica e
          madeira
        </div>
      ),
      description: (
        <div>
          Serra fita por metro
          <br />
          Espessura: 0,6mm
          <br />
          Polegadas: 1/2
          <br />
          Emenda pronta
          <br />
          Tamanho: 5,80m
        </div>
      ),
    },
    {
      id: 16,
      name: "SERRA FITA BIMETÁLICA PARA MADEIRA 1/2 - 5,10M",
      src: "./../../../Imagens-largemedia/7serrafita/serrafitax3.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. SERRA BIMETALICA <br /> DISPONIBILIDADE:
          PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Serra fita bimetálica para madeira, ideal para produção em escala,
          chega a durar 10 vezes mais o corte que uma serra fita de carbono
          temperada. Ela vem 13mm largura em duas versões, para metal mecânica e
          madeira
        </div>
      ),
      description: (
        <div>
          Serra fita por metro
          <br />
          Espessura: 0,6mm
          <br />
          Polegadas: 1/2
          <br />
          Emenda pronta
          <br />
          Tamanho: 5,10m
        </div>
      ),
    },
    {
      id: 17,
      name: "SERRA FITA BIMETÁLICA PARA MADEIRA 1/2",
      src: "./../../../Imagens-largemedia/7serrafita/serrafitax3.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU603573 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Serra fita bimetálica para madeira, ideal para produção em escala,
          chega a durar 10 vezes mais o corte que uma serra fita de carbono
          temperada. Ela vem 13mm largura em duas versões, para metal mecânica e
          madeira
        </div>
      ),
      description: (
        <div>
          Serra fita por metro
          <br />
          Espessura: 0,6mm
          <br />
          Polegadas: 1/2
          <br />
          Emenda pronta
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
                    <a href="/ferramentas/serrafita">Serrafita</a>
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

export default Serrafitas;
