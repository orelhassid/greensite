import React from "react";
// import { Navigation } from "../layout";

import { SEO, PageCover } from "../layout";

// Interface:
// title, subtitle
export const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <SEO title={title} description={subtitle} />
      <PageCover />
      <Title title={title} subtitle={subtitle} />
    </header>
  );
};

const Title = ({ title, subtitle }) => (
  <div className="site-title">
    <h1 className="title">{title}</h1>
    <h3 className="subtitle">{subtitle}</h3>
  </div>
);
