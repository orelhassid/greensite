import React from "react";
import Layout, { Header, Content } from "../components/layout";

import Image from "../assets/images/page-not-found.svg";
function Home() {
  return (
    <Layout>
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
