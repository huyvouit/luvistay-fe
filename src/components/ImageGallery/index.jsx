import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import "./ImageGallery.scss";
export const ImageGallery = () => {
  return (
    <SRLWrapper>
      <main className="image-gallery">
        <section className="image-gallery-column">
          <img
            src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room.jpg"
            alt=""
          />
          <img
            src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/single-room-4-2.jpg"
            alt=""
          />
          <img
            src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/single-room-2-2.jpg"
            alt=""
          />
        </section>
        <section className="image-gallery-column">
          <img
            src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/single-room-3-2.jpg"
            alt=""
          />

          <img
            src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/single-room-1-2.jpg"
            alt=""
          />
        </section>
      </main>
    </SRLWrapper>
  );
};
