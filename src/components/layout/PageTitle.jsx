import React from "react";

export const PageTitle = ({ title, subtitle, custom }) => {
  return (
    <header className={`site-header site-header-${custom}`}>
      <div className="site-title">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </header>
  );
};

// export default PageCover;
