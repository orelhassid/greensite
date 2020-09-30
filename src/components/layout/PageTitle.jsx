import React from "react";
import classNames from "classnames";

export const PageTitle = ({ title, subtitle, custom }) => {
  return (
    <header
      className={classNames("site-header", {
        headerCustom: custom,
      })}
    >
      <div className="site-title">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </header>
  );
};

export const PageTitleCustom = ({ title, subtitle, custom }) => {
  return (
    <header
      className={classNames("site-header", {
        headerCustom: custom,
      })}
    >
      <div className="site-title">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </header>
  );
};
// export default PageCover;
