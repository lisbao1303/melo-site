import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";

function Contato() {
  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Contato" icon={faEnvelopeOpenText} />
          </div>
          <div>Contato page</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contato;
