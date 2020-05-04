import React from "react";

const Product = ({ match, data }) => {
  // eslint-disable-next-line
  var product = data.find((p) => p.id == match.params.productId);
  var productData;

  if (product)
    productData = (
      <div>
        <div className="embed-responsive embed-responsive-4by3">
          <img
            className="card-img-top embed-responsive-item"
            src={product.src}
            alt=""
          />
        </div>
        <h3> {product.name} </h3>
        <h4>{product.status}</h4>
        <p>{product.desc2}</p>
        <p>{product.description}</p>
        <hr />
      </div>
    );
  else productData = <h2> Sorry. Product doesn't exist </h2>;

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Product;
