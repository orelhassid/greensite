import React from "react";
// import { Navigation } from "../layout";

import { SEO } from "../layout";

// Interface:
// title, subtitle
export const HeaderCustom = ({ title, subtitle, children }) => {
  return (
    <header className="site-header header-custom">
      <SEO title={title} description={subtitle} />
      {children}
      <Title title={title} subtitle={subtitle} />
    </header>
  );
};

const Title = ({ title, subtitle }) => (
  <div className="site-title">
    <h3 className="subtitle">{subtitle}</h3>
    <h1 className="title">{title}</h1>
  </div>
);
