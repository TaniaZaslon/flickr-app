import React from "react";

function ImageItem({ image }) {
  return (
    <div className="column column-gallery">
      <a href="#">
        <img src={image.src.medium} alt="" />
      </a>
    </div>
  );
}
export default ImageItem;
