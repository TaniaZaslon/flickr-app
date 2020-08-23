import React from "react";
import Lightbox from "react-lightbox-component";

function ImageGallery({ images }) {
  return (
    <Lightbox
      images={
        ([] = images.map((item) => {
          let obj = {
            src: item.src.medium,
            title: "",
            description: " ",
          };
          return obj;
        }))
      }
      renderImageFunc={(idx, image, toggleLightbox) => {
        return (
          <div className="column-gallery">
            <img
              key={idx}
              src={image.src}
              onClick={toggleLightbox.bind(null, idx)}
              alt=""
              className="lightbox-img-thumbnail"
            />
          </div>
        );
      }}
    />
  );
}
export default ImageGallery;
