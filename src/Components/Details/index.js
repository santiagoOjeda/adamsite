import React, { useEffect } from "react";
import { MainButton } from "../";

const Detail = ({
  color,
  btnBgColor,
  textPos,
  textPosLeft,
  titleColor,
  detailImg,
  description,
  title,
  titleBg,
  bgImg,
  pColor,
  btnText,
  btnBorderColor,
}) => {
  let styleTitle = {
    color: titleColor,
  };
  let styleColor = {
    color: pColor,
  };

  return (
    <section className="detail" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="detail__left">
        <div className="detail__left__title-container">
          <h1 style={styleTitle}>{title}</h1>
          <img src={titleBg} alt="titleBg" />
        </div>
        <p style={pColor != undefined ? styleColor : styleTitle}>
          {description}
        </p>
        <MainButton
          buttonText={btnText}
          borderColor={
            btnBorderColor != undefined ? btnBorderColor : titleColor
          }
          bgBtnColor={btnBgColor}
        />
      </div>
      <div className="detail__right">
        <img src={detailImg} alt={detailImg} />
      </div>
    </section>
  );
};

export default Detail;
