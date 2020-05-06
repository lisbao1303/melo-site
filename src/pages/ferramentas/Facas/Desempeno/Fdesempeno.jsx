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
const Fdesempeno = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "FACA EM TITÂNIO 600X30X3 M35 (Peça)",
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
    {
      id: 2,
      name: "FACA EM TITÂNIO 600X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-7 <br /> DISPONIBILIDADE:
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
          <br />1 par
        </div>
      ),
    },
    {
      id: 3,
      name: "FACA EM TITÂNIO 500X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-6 <br /> DISPONIBILIDADE:
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
          Comprimento: 500mm
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
    {
      id: 4,
      name: "FACA EM TITÂNIO 500X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-6 <br /> DISPONIBILIDADE:
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
          Comprimento: 500mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 5,
      name: "FACA EM TITÂNIO 420X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-5 <br /> DISPONIBILIDADE:
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
          Comprimento: 420mm
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
    {
      id: 6,
      name: "FACA EM TITÂNIO 420X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-5 <br /> DISPONIBILIDADE:
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
          Comprimento: 420mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 7,
      name: "FACA EM TITÂNIO 400X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-4 <br /> DISPONIBILIDADE:
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
          Comprimento: 400mm
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
    {
      id: 8,
      name: "FACA EM TITÂNIO 400X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-4 <br /> DISPONIBILIDADE:
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
          Comprimento: 400mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 9,
      name: "FACA EM TITÂNIO 350X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-3 <br /> DISPONIBILIDADE:
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
          Comprimento: 350mm
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
    {
      id: 10,
      name: "FACA EM TITÂNIO 350X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-3 <br /> DISPONIBILIDADE:
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
          Comprimento: 350mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 11,
      name: "FACA EM TITÂNIO 320X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843-2 <br /> DISPONIBILIDADE:
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
          Comprimento: 320mm
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
    {
      id: 12,
      name: "FACA EM TITÂNIO 320X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189-2 <br /> DISPONIBILIDADE:
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
          Comprimento: 320mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 13,
      name: "FACA EM TITÂNIO 300X30X3 M35 (Peça)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU869843 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
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
          Comprimento: 300mm
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
    {
      id: 14,
      name: "FACA EM TITÂNIO 300X30X3 M35 (Par)",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/03x14vezes.jpg",
      color: "secondary",
      status: (
        <div>
          MARCA: BLACKNIFES <br /> REF. OU102189 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
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
          Comprimento: 300mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Titânio M35, reta lisa
          <br />1 par
        </div>
      ),
    },
    {
      id: 15,
      name: "FACA RETA LISA COMPRIMENTO 500X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU717219-5 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 500mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 peça
        </div>
      ),
    },
    {
      id: 16,
      name: "FACA RETA LISA COMPRIMENTO 420X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. 01
          <br /> DISPONIBILIDADE: ATÉ 10 DIAS ÚTEIS
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 420mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 peça
        </div>
      ),
    },
    {
      id: 17,
      name: "FACA RETA LISA COMPRIMENTO 400X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU717219-4 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 400mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 peça
        </div>
      ),
    },
    {
      id: 18,
      name: "FACA RETA LISA COMPRIMENTO 350X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU717219-3 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 350mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 peça
        </div>
      ),
    },
    {
      id: 19,
      name: "FACA RETA LISA COMPRIMENTO 320X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU717219-2
          <br /> DISPONIBILIDADE: PRONTA ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 320mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
          <br />1 peça
        </div>
      ),
    },
    {
      id: 20,
      name: "FACA RETA LISA COMPRIMENTO 300X30X3 EM WÍDEA",
      src: "./../../../Imagens-largemedia/3pagefacas/desempeno/facawideax6.png",
      color: "secondary",
      status: (
        <div>
          MARCA: FEPAM <br /> REF. OU717219 <br /> DISPONIBILIDADE: PRONTA
          ENTREGA
        </div>
      ),
      desc2: (
        <div>
          Faca desempeno eixo redondo é indicada para uso em plaina
          desempenadeira e possui função de aplainar madeira. Conta com corpo
          feito em Wídea, oferecendo resistência e durabilidade.
        </div>
      ),
      description: (
        <div>
          Faca reta lisa para desengrosso eixo redondo
          <br />
          Comprimento: 300mm
          <br />
          Largura: 30mm
          <br />
          Espessura: 3mm
          <br />
          Corpo feito em Wídea
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

export default Fdesempeno;
