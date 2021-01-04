import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image, key) => {
    return <img key={key} src={image.urls.small} alt="result" />;
  });

  return <div>{images}</div>;
};

export default ImageList;
