import React from "react";
import Layout, { Header, Content } from "../components/layout";
import SEO from "../components/layout/SEO";

function Home() {
  return (
    <Layout>
      <SEO title="Home Page" description="GreenSite Press home page" />
      <Header title="Home Page" />
      <Content></Content>
    </Layout>
  );
}

export default Home;
