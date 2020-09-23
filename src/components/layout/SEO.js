import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>GreenSite | {title}</title>
      <meta name="description" content={description}></meta>
      <link rel="canonical" href="https://orelhassid-greensite.netlify.app/" />

      <link
        rel="icon"
        type="image/png"
        href="assets/icons/camera.svg"
        sizes="16x16"
      />
    </Helmet>
  );
};

export default SEO;
