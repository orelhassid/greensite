import React from "react";
// import { Navigation } from "../layout";

import { SEO, PageCover } from "../layout";
import { Navigation } from "./Navigation";
import { PageTitle } from "./PageTitle";

// Interface:
// title, subtitle
export const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <Navigation />
      {/* <PageCover /> */}
      <PageTitle title={title} subtitle={subtitle} />
      {/* <Title title={title} subtitle={subtitle} /> */}
    </header>
  );
};
