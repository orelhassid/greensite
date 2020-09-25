import React from "react";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";

export const PageCover = ({ title, subtitle }) => {
  return (
    <div className="site-cover">
      <div className="image">
        <CameraIcon />
      </div>
    </div>
  );
};

// export default PageCover;
