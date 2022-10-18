import React from "react";
import "./App.css";
function ImageMeme(props) {
  const { src, width, height, alt, key } = props;
  console.log("key", key);
  return <img key={key} src={src} className="meme_image" alt={alt} />;
}

export default ImageMeme;
