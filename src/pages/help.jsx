import React from "react";
import { Link } from "react-router-dom";
import Layout, { Header, Content } from "../components/layout";

function Home() {
  return (
    <Layout>
      <Header title="Help Page" />
      <Content>Help</Content>
    </Layout>
  );
}

export default Home;
