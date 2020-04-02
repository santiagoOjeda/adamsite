import React from "react";
import { MainButton } from "../";

const Detail = ({
  color,
  textPos,
  textPosLeft,
  titleColor,
  detailImg,
  description,
  title,
  titleBg,
  bgImg
}) => {
  return (
    <section className="detail" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="detail__left">
        <div className="detail__left__title-container">
          <h1>{title}</h1>
          <img src={titleBg} alt="titleBg" />
        </div>
        <p>{description}</p>
        <MainButton
          buttonText={"btnText"}
          borderColor={"#000"}
          bgBtnColor={"#000"}
        />
      </div>
      <div className="detail__right">
        <img src={detailImg} alt={detailImg} />
      </div>
    </section>
  );
};

export default Detail;
