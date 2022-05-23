import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import "./ImageGallery.scss";
export const ImageGallery = ({ listImage }) => {
  return (
    <SRLWrapper>
      <main className="image-gallery">
        {listImage.map((item, index) => {
          return <img key={index} className="image-item" src={item} alt="" />;
        })}
      </main>
    </SRLWrapper>
  );
};
