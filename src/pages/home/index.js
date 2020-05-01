import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import HeadLogo from "../../HeadLogo";
import ActionBar from "../../ActionBar";
import Footer from "../../Footer";

function Home() {
  return (
    <div className="conteinerprincipal">
      <div className="campocentral">
        <div className="catalogo">
          <div>
            <HeadLogo />
          </div>
          <div>
            <ActionBar text="Home" icon={faHome} />
          </div>
          <div>Home page</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
