import React from "react";
import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "@/HeadLogo";
import ActionBar from "@/ActionBar";
import Footer from "@/Footer";
import Content from "./content";

class Brocas extends React.Component {
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
              <Content />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Brocas;
