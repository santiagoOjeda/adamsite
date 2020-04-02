import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import mockdetailimage from "../../Resources/Images/mockdetailimage.jpg";

const CarouselDetail = ({ imageArray }) => {
  const imgElements = imageArray.map(i => {
    return (
      <div key={i}>
        <img src={mockdetailimage} />
      </div>
    );
  });

  return (
    <section>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {imgElements}
      </Carousel>
    </section>
  );
};

export default CarouselDetail;
