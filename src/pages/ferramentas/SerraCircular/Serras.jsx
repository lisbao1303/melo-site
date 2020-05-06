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
const Serras = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "DISCO DE SERRA CIRCULAR CÔNCAVA PARA ACABAMENTO 250 X 48Z CROMADA",
      src: "./../../../Imagens-largemedia/6serra/serrax1.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. ACABAMENTO 05 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Principais características das serras CORTEC linha ACABAMENTO:
          <br /> 1) Possuí lâmina cromada e galvanizada, o que proporciona um
          corte muito mais estável e sem aderência. <br />
          2) Fabricadas com pastilhas especiais para uma duração maior de corte
          e capaz de cortar até pequenos materiais ferrosos como pino ou grampo,
          tantas vezes encontrados em MDF. <br />
          3) Juntando estas características em uma só serra, nos da CORTEC temos
          a certeza de estarmos trazendo para o mercado brasileiro uma serra de
          acabamento e longevidade ainda desconhecido para nossas marcenarias.
        </div>
      ),
      description: (
        <div>
          Serra circular para MDF
          <br />
          Diâmetro: 250mm
          <br />
          Número de dentes: 48
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,2
          <br />
          Furo: 30mm
          <br />
          Tipo: 35º
        </div>
      ),
    },
    {
      id: 2,
      name: "DISCO DE SERRA CIRCULAR PARA ACABAMENTO 250 X 80Z 35º CROMADA",
      src: "./../../../Imagens-largemedia/6serra/serrax4.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. ACABAMENTO 01 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Principais características das serras CORTEC linha ACABAMENTO:
          <br /> 1) Possuí lâmina cromada e galvanizada, o que proporciona um
          corte muito mais estável e sem aderência. <br />
          2) Fabricadas com pastilhas especiais para uma duração maior de corte
          e capaz de cortar até pequenos materiais ferrosos como pino ou grampo,
          tantas vezes encontrados em MDF. <br />
          3) Juntando estas características em uma só serra, nos da CORTEC temos
          a certeza de estarmos trazendo para o mercado brasileiro uma serra de
          acabamento e longevidade ainda desconhecido para nossas marcenarias.
        </div>
      ),
      description: (
        <div>
          Serra circular para MDF
          <br />
          Diâmetro: 250mm
          <br />
          Número de dentes: 80
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,2
          <br />
          Furo: 30mm
          <br />
          Tipo: 35º
        </div>
      ),
    },
    {
      id: 3,
      name: "DISCO DE SERRA CIRCULAR PARA ACABAMENTO 250 X 80Z RT CROMADA",
      src: "./../../../Imagens-largemedia/6serra/serrax4.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. ACABAMENTO 02 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Principais características das serras CORTEC linha ACABAMENTO:
          <br /> 1) Possuí lâmina cromada e galvanizada, o que proporciona um
          corte muito mais estável e sem aderência. <br />
          2) Fabricadas com pastilhas especiais para uma duração maior de corte
          e capaz de cortar até pequenos materiais ferrosos como pino ou grampo,
          tantas vezes encontrados em MDF. <br />
          3) Juntando estas características em uma só serra, nos da CORTEC temos
          a certeza de estarmos trazendo para o mercado brasileiro uma serra de
          acabamento e longevidade ainda desconhecido para nossas marcenarias.
        </div>
      ),
      description: (
        <div>
          Serra circular para MDF
          <br />
          Diâmetro: 250mm
          <br />
          Número de dentes: 80
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,2
          <br />
          Furo: 30mm
          <br />
          Tipo: RT
        </div>
      ),
    },
    {
      id: 4,
      name: "SERRA CIRCULAR PARA MADEIRA DEMOLIÇÃO",
      src: "./../../../Imagens-largemedia/6serra/01.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. LINHA DEMOLIÇÃO <br /> DISPONIBILIDADE:
          PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Disco de serra circular para madeira demolição 300x36Z x 3,2 x 2,4
          Cortec.
          <br /> Esta corta até prego!!
          <br /> Tendo em vista o grande problema que os profissionais que atuam
          no ramo de móveis de demolição, que é a grande quantidade de pregos
          encontrada nesse material.
          <br /> Temos exclusividade em trazer a linha Cortec Demolição,
          projetada para cortar a madeira com o melhor acabamento, ela pode
          também cortar eventualmente qualquer tipo de prego e/ou parafuso que
          possam estar embutidos na madeira.
        </div>
      ),
      description: (
        <div>
          Diâmetro: 300mm
          <br />
          Número de dentes: 36
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,4
          <br />
          Furo: 30mm
        </div>
      ),
    },
    {
      id: 5,
      name: "DISCO DE SERRA CIRCULAR PARA ACABAMENTO 300 X 96Z 35º CROMADA",
      src: "./../../../Imagens-largemedia/6serra/serrax4.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. ACABAMENTO 03 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Principais características das serras CORTEC linha ACABAMENTO:
          <br /> 1) Possuí lâmina cromada e galvanizada, o que proporciona um
          corte muito mais estável e sem aderência. <br />
          2) Fabricadas com pastilhas especiais para uma duração maior de corte
          e capaz de cortar até pequenos materiais ferrosos como pino ou grampo,
          tantas vezes encontrados em MDF. <br />
          3) Juntando estas características em uma só serra, nos da CORTEC temos
          a certeza de estarmos trazendo para o mercado brasileiro uma serra de
          acabamento e longevidade ainda desconhecido para nossas marcenarias.
        </div>
      ),
      description: (
        <div>
          Serra circular para MDF
          <br />
          Diâmetro: 300mm
          <br />
          Número de dentes: 96
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,2
          <br />
          Furo: 30mm
          <br />
          Tipo: 35º
        </div>
      ),
    },
    {
      id: 6,
      name: "DISCO DE SERRA CIRCULAR PARA ACABAMENTO 300 X 96Z RT CROMADA",
      src: "./../../../Imagens-largemedia/6serra/serrax4.png",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. ACABAMENTO 04 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Principais características das serras CORTEC linha ACABAMENTO:
          <br /> 1) Possuí lâmina cromada e galvanizada, o que proporciona um
          corte muito mais estável e sem aderência. <br />
          2) Fabricadas com pastilhas especiais para uma duração maior de corte
          e capaz de cortar até pequenos materiais ferrosos como pino ou grampo,
          tantas vezes encontrados em MDF. <br />
          3) Juntando estas características em uma só serra, nos da CORTEC temos
          a certeza de estarmos trazendo para o mercado brasileiro uma serra de
          acabamento e longevidade ainda desconhecido para nossas marcenarias.
        </div>
      ),
      description: (
        <div>
          Serra circular para MDF
          <br />
          Diâmetro: 300mm
          <br />
          Número de dentes: 96
          <br />
          Espessura do corte: 3,2
          <br />
          Espessura de lâmina: 2,2
          <br />
          Furo: 30mm
          <br />
          Tipo: RT
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
                    <a href="/ferramentas/serra">Serras</a>
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

export default Serras;
