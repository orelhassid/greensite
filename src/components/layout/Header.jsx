import React from "react";
import { Navigation } from "./Navigation";
import { PageTitle } from "./PageTitle";

// Interface:
// title, subtitle
export const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <Navigation />
      <PageTitle title={title} subtitle={subtitle} />
    </header>
  );
};
