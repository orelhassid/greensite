import React from "react";
import Layout, { Header, Content, Grid } from "../components/layout";
import VisitorImage from "../assets/images/visitor-image.svg";
import HubImage from "../assets/images/business-image.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <Header
        title="Home Page"
        subtitle="Start by navigation as visitor or Business"
      />
      <Content>
        <Grid>
          <Link to="/visitor/register">
            <img src={VisitorImage} alt="" />
          </Link>
          <Link to="/hub/register">
            <img src={HubImage} alt="" />
          </Link>
        </Grid>
      </Content>
    </Layout>
  );
}

export default Home;
