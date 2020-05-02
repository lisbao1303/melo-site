import React from "react";
import { Media } from "reactstrap";
import banner from "@/banner.png";
class HeadLogo extends React.Component {
  render() {
    return (
      <Media>
        <img className="img-fluid" src={banner} alt="./banner.png" />
      </Media>
    );
  }
}
export default HeadLogo;
