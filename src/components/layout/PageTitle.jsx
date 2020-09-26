import React from "react";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <div className="site-title">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </header>
  );
};

// export default PageCover;
