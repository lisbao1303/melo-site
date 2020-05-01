import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";

function Sobre() {
  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Localização" icon={faMapMarkerAlt} />
          </div>
          <div>Sobre page</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
