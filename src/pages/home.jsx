import React from "react";
import { Link } from "react-router-dom";
import Layout, { Header, Content } from "../components/layout";

function Home() {
  return (
    <Layout>
      <Header title="Home Page" />
      <Content></Content>
    </Layout>
  );
}

export default Home;
