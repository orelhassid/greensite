import React from "react";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";

// Interface:
// title, subtitle
export const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
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
