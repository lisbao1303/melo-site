import React from "react";
import "./../App.css";
function ActionBar() {
  return (
    <div className="container-fluid actiondiv">
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Ferramentas</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </div>
  );
}
export default ActionBar;
