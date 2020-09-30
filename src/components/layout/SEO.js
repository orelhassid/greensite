import React from "react";
import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>GreenSite | {title}</title>
      <meta name="description" content={description}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="canonical" href="https://orelhassid-greensite.netlify.app/" />
      <link
        rel="icon"
        type="image/png"
        href="../../../public/favicon.ico"
        sizes="96x96"
      />
      <link rel="apple-touch-icon" href="/public/GreenSite-Logo@96w.png" />
      <meta name="apple-mobile-web-app-status-bar" content="#008725" />

      <meta name="theme-color" content="#008725" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "SEO title",
  description: "Page Description",
};
