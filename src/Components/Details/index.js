import React from "react";
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
}) => {
  let styleTitle = {
    color: titleColor,
  };

  return (
    <section className="detail" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="detail__left">
        <div className="detail__left__title-container">
          <h1 style={styleTitle}>{title}</h1>
          <img src={titleBg} alt="titleBg" />
        </div>
        <p style={styleTitle}>{description}</p>
        <MainButton
          buttonText={"btnText"}
          borderColor={titleColor}
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
