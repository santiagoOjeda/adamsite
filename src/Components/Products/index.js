import React from "react";

const Product = ({
  title,
  showTitle,
  titleBgColor,
  titleColor,
  productsImgArray
}) => {
  let styleBgTitle = {
    backgroundColor: titleBgColor,
    width: "80px",
    height: "30px",
    position: "relative",
    top: "22px"
  };
  let styleTitle = {
    color: titleColor
  };
  return (
    <section className="product">
      {showTitle && (
        <div className="product__title-container">
          <h3 style={styleTitle}>{title}</h3>
          <div style={styleBgTitle}></div>
        </div>
      )}

      <div className="product__items-container">
        {productsImgArray.map(i => {
          return (
            <div className="product__items-container__img-container" key={i}>
              <img src={i} alt={i}></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
