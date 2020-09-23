import React from "react";

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
  <div className="site-cover">Cover Image</div>
);

const Title = ({ title, subtitle }) => (
  <div className="site-title">
    <h1 className="title">{title}</h1>
    <h3 className="subtitle">{subtitle}</h3>
  </div>
);
