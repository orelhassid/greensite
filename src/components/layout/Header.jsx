import React from "react";
import { Navigation } from "../layout";

import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { SEO } from "../layout";

// Interface:
// title, subtitle
export const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <SEO title={title} description={subtitle} />
      <Navigation />

      <CoverImage />
      <Title title={title} subtitle={subtitle} />
    </header>
  );
};

const CoverImage = ({ title, subtitle }) => (
  <div className="site-cover">
    <div className="image">
      <CameraIcon />
    </div>
  </div>
);

const Title = ({ title, subtitle }) => (
  <div className="site-title">
    <h1 className="title">{title}</h1>
    <h3 className="subtitle">{subtitle}</h3>
  </div>
);
