import React from "react";
import Layout, { Header, Content, Navigation, SEO } from "../components/layout";

import Image from "../assets/images/page-not-found.svg";
function Home() {
  return (
    <Layout>
      <SEO title="Not Found" subtitle="error code 404 page not found" />
      <Header title="Page Not Found" subtitle="error code 404" />
      <Content>
        <div className="center center-screen">
          <div className="image">
            <img src={Image} alt="404" />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
