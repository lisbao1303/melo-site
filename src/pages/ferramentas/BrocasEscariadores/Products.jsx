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
const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "BROCA ESCAREADORA 8MM X 3MM",
      src: "./../../Imagens-largemedia/1pagebe/03.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU860480 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Escariador 8mm x 3mm , feito em wídea de micro grãos , com chave para
          aperto e centralização da broca. Serve para fazer furos escariados com
          alto acabamento, para todo tipo de móveis em MDF ou Madeira.
        </div>
      ),
      description: (
        <div>
          Diametro: Ø 8 mm <br /> Broca: 3 mm <br />
          Corpo feito em Wídea
          <br /> 1 Peça <br />
          Tipo furar e escarear <br />
          Uso indicado para furar e escarear todo tipo de madeiras
          <br /> Tipo de broca escareador mais versátil
        </div>
      ),
    },
    {
      id: 2,
      name: "SERRA COPO WIDEA 60MM COM 6 DENTES",
      src:
        "./../../Imagens-largemedia/1pagebe/Serra Copo Widea 60mm Com 6 Dentes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU974762 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          A serra copo é indicada para o uso em MDF e madeiras em
          geral,destaca-se por sua qualidade no acabamento e durabilidade da
          serra.
        </div>
      ),
      description: (
        <div>
          Furação 60mm
          <br />
          Dentes 6 <br />
          Em Wídea
        </div>
      ),
    },
    {
      id: 3,
      name: "JOGO DE BITS PHILLIPS DUPLA PH2 65MM COM ENCAIXE DE 1/4 POL.",
      src:
        "./../../Imagens-largemedia/1pagebe/Jogo de Bits Phillips Dupla PH2 65mm com Encaixe de 1.4 Pol. 10 Peças Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU903767 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Jogo de bit ponta phillips dupla contém 10 unidades, sendo ideal para
          utilização em parafusadeiras com encaixe de 1/4" PH 2, indicado para
          uso industrial. Forjado em material de alta resistência, proporciona
          eficiência no uso e permite maior vida útil e segurança.
        </div>
      ),
      description: (
        <div>
          Contém 10 unidades <br />
          Tamanho: 65mm <br />
          Aço de alta resistência <br />
          Utilizado para apertar ou afrouxar parafusos de fenda cruzada <br />{" "}
          Ideal para utilização em parafusadeiras com encaixe 1/4"
        </div>
      ),
    },
    {
      id: 4,
      name: "JOGO DE BITS PHILLIPS DUPLA PH2 25MM COM ENCAIXE DE 1/4 POL.",
      src:
        "./../../Imagens-largemedia/1pagebe/Jogo de Bits Phillips Dupla PH2 25mm com Encaixe de 1.4 Pol. 10 Peças Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU943602 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Jogo de bit ponta phillips contém 10 unidades, sendo ideal para
          utilização em parafusadeiras com encaixe de 1/4" PH2, indicado para
          uso industrial. Forjado em material de alta resistência, proporciona
          eficiência no uso e permite maior vida útil e segurança.
        </div>
      ),
      description: (
        <div>
          Contém 10 unidades <br />
          Tamanho: 25mm <br />
          Aço de alta resistência <br />
          Utilizado para apertar ou afrouxar parafusos de fenda cruzada <br />
          Ideal para utilização em parafusadeiras com encaixe de 1/4"
        </div>
      ),
    },
    {
      id: 5,
      name: "JOGO DE BITS PHILLIPS DUPLA PH2 100 MM COM ENCAIXE DE 1/4 POL.",
      src:
        "./../../Imagens-largemedia/1pagebe/Jogo de Bits Phillips Dupla PH2 100 mm com Encaixe de 1.4 Pol. 10 Peças Cortec2.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU871183 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Jogo de bit ponta Phillips dupla contém 10 unidades, sendo ideal para
          utilização em parafusadeiras com encaixe de 1/4" PH 2, indicado para
          uso industrial. Forjado em material de alta resistência, proporciona
          eficiência no uso e permite maior vida útil e segurança.
        </div>
      ),
      description: (
        <div>
          Contém 10 unidades
          <br />
          Tamanho 100mm
          <br />
          Aço de alta resistência
          <br />
          Utilizado para apertar ou afrouxar parafusos de fenda cruzada <br />
          Ideal para utilização em parafusadeiras com encaixe de 1/4"
        </div>
      ),
    },
    {
      id: 6,
      name: "JOGO DE BITS PHILIPS PH2 50MM MAGNETIZADO",
      src: "./../../Imagens-largemedia/1pagebe/broca ph2.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU860480 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Bit para Parafusadeira imantado.Feito em aço alemão de de alta
          resistência, não quebra e não deforma. Serve para parafusar pontas
          Allen.
        </div>
      ),
      description: (
        <div>
          Contém 10 unidades
          <br />
          Tamanho: 50mm
          <br />
          Aço de alta resistência
          <br />
          Utilizado para apertar ou afrouxar parafusos.
          <br />
          Ideal para utilização em parafusadeiras
        </div>
      ),
    },
    {
      id: 7,
      name: "ESTOJO COM 12 FRESAS EM WIDEA PARA TUPIA MANUAL COM ROLAMENTO",
      src: "./../../Imagens-largemedia/1pagebe/estojo.PNG",
      color: "secondary",
      status: (
        <div>
          MARCA: REF. ESTOJO <br /> DISPONIBILIDADE: PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Estojo com 12 Fresas em Widea para Tupia Manual com Rolamento Para
          trabalhos em placas de MDF, Compensados ou até mesmo madeira.
        </div>
      ),
      description: <div>12 peças</div>,
    },
    {
      id: 8,
      name: "BROCA PARA VENEZIANA Ø 10X 80 FEPAM",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca Veneziana Ø 10x 80 Fepam.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU307830 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca para veneziana com corpo feito em aço rápido HSS, versátil e com
          acabamento brilhante.
        </div>
      ),
      description: (
        <div>
          Corte: Ø 10 mm
          <br />
          Comprimento corte: 35mm
          <br />
          Comprimento total: 80mm
          <br />
          Haste: Ø 10mm <br />
          Comprimento Haste: 40mm
          <br />
          Corpo feito em aço rápido HSS
          <br />
          1 Peça
          <br />
          Tipo de broca mais versátil
          <br />
          Possui acabamento brilhante
        </div>
      ),
    },
    {
      id: 9,
      name: "BROCA ESCAREADORA Ø 8 X BROCA 4 COM CHAVE ALLEN ",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca escareadora Ø 8 x broca 4  chave allen Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU793624 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca escareadora em aço de alta resistência, permitindo um furo
          rápido e preciso. Uso indicado para furar e escarear madeiras maciças
          e chapas de compensado e MDF. Ferramenta de uso e operação em
          parafusadeira e furadeira.
        </div>
      ),
      description: (
        <div>
          Diametro: Ø 08 mm
          <br />
          Broca: 4 mm
          <br />
          45º
          <br />
          Corpo feito em aço resistente <br />
          1 Peça
          <br />
          Tipo furar e escarear <br />
          Uso indicado para furar e escarear madeiras maciças e chapas de
          compensado e MDF
          <br />
          Tipo de broca escareador mais versátil
          <br />
          Possui acabamento brilhante
        </div>
      ),
    },
    {
      id: 10,
      name: "BROCA ESCAREADORA Ø 8 X BROCA 3 COM CHAVE ALLEN",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca escareadora Ø 8 x broca 3 chave allen Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU746357 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca escareadora em aço de alta resistência, permitindo um furo
          rápido e preciso. Uso indicado para furar e escarear madeiras maciças
          e chapas de compensado e MDF. Ferramenta de uso e operação em
          parafusadeira e furadeira.
        </div>
      ),
      description: (
        <div>
          Diametro: Ø 08 mm
          <br />
          Broca: 3 mm
          <br />
          45º
          <br />
          Corpo feito em aço resistente <br />
          1 Peça
          <br />
          Tipo furar e escarear <br />
          Uso indicado para furar e escarear madeiras maciças e chapas de
          compensado e MDF
          <br />
          Tipo de broca escareador mais versátil
          <br />
          Possui acabamento brilhante
        </div>
      ),
    },
    {
      id: 11,
      name: "BROCA ESCAREADORA Ø 10 X BROCA 3 COM CHAVE ALLEN",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca escareadora Ø 10 x broca 3  chave Allen Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU841967 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca escareadora em aço de alta resistência, permitindo um furo
          rápido e preciso. Uso indicado para furar e escarear madeiras maciças
          e chapas de compensado e MDF. Ferramenta de uso e operação em
          parafusadeira e furadeira.
        </div>
      ),
      description: (
        <div>
          Diametro: Ø 10 mm <br />
          Broca: 3 mm <br />
          45º <br />
          Corpo feito em aço resistente <br />
          1 Peça <br />
          Tipo furar e escarear <br />
          Uso indicado para furar e escarear madeiras maciças e chapas de
          compensado e MDF <br />
          Tipo de broca escareador mais versátil <br />
          Possui acabamento brilhante
        </div>
      ),
    },
    {
      id: 12,
      name: "BROCA DOBRADIÇA Ø 35MM COM LIMITADOR DE FURO",
      src: "./../../Imagens-largemedia/1pagebe/05.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU392637 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca de 35mm em Wídea com dispositivo para controle de profundidade.
          Serve para fazer furos de 35mm para dobradiças de pressão. Tem um
          excelente acabamento e um dispositivo que permite a regulagem da
          profundidade do furo.
        </div>
      ),
      description: (
        <div>
          Diâmetro: Ø 35mm
          <br />
          Corpo feito em Wídea resistente <br />1 Peça
        </div>
      ),
    },
    {
      id: 13,
      name: "BROCA DOBRADIÇA Ø 35 MM C/ WÍDEA",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca Dobradiça Ø 35 mm  wídea Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU927532 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca de grande precisão com lâmina de Wídea e ponta de centrar.
          Proporciona corte sem lascar o material em madeiras duras e macias,
          revestidas e folheadas.
        </div>
      ),
      description: (
        <div>
          Diâmetro: Ø 35mm <br />
          Comprimento total: 57 <br />
          Diâmetro Haste: Ø10 <br />
          Comprimento Haste: 30 <br />
          Corpo feito em wídea resistente <br />1 Peça
        </div>
      ),
    },
    {
      id: 14,
      name: "BROCA DOBRADIÇA Ø 35 IMPORTADA",
      src: "./../../Imagens-largemedia/1pagebe/broca 35 mm importada.jpg",
      color: "secondary",
      status: (
        <div>
          REF. OU264876 <br /> DISPONIBILIDADE: PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Projetada para a perfuração precisa e furos de grande diâmetro e
          profundidade. A broca é utilizada para instalar dobradiças em madeira,
          laminados e madeira prensada.
        </div>
      ),
      description: (
        <div>
          Diâmetro: Ø 35mm
          <br />
          Comprimento total: 70
          <br />
          Diâmetro Haste: Ø 08
          <br />
          Comprimento Haste: 30
          <br />
          Corpo feito em Wídea resistente <br />1 Peça
        </div>
      ),
    },
    {
      id: 15,
      name: "BROCA DOBRADIÇA Ø 26MM C/ WÍDEA ",
      src:
        "./../../Imagens-largemedia/1pagebe/Broca Dobradiça Ø 26mm com wídea Cortec.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: CORTEC <br /> REF. OU695913 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Broca de grande precisão com lâmina de Wídea e ponta de centrar.
          Proporciona corte sem lascar o material em madeiras duras e macias,
          revestidas e folheadas.
        </div>
      ),
      description: (
        <div>
          Diâmetro: Ø 26mm
          <br />
          Comprimento total: 57
          <br />
          Diâmetro Haste: Ø 10
          <br />
          Comprimento Haste: 30
          <br />
          Corpo feito em Wídea resistente <br />1 Peça
        </div>
      ),
    },
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
                    <a href={match.url}>Brocas e Escariadores</a>
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

export default Products;
