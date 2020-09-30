import React from "react";

export default function CardImage({ image, caption }) {
  return (
    <figure>
      <img src={image} alt="" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
