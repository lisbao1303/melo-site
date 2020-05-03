import React from "react";
import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "@/HeadLogo";
import ActionBar from "@/ActionBar";
import Footer from "@/Footer";
import PageCard from "@/PageCard";

class Brocas extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        {
          name: "Brocas e escariadores",
          src: "./../Imagens-largemedia/Broca/DSC_1925.JPG",
          onClick: "/ferramentas/brocasescariadores",
          color: "primary",
        },
      ],
    };
  }
  render() {
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
            <div>
              <PageCard cards={this.state} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Brocas;
