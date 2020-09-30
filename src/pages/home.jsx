import React from "react";
import Layout, { Header, Content, Grid, SEO } from "../components/layout";
// import VisitorImage from "../assets/images/visitor-image.svg";
import visitorImage from "../assets/images/visitor-image.svg";
import hubImage from "../assets/images/business-image.svg";
import { Link } from "react-router-dom";
import CardImage from "../components/cards/CardImage";

function Home() {
  console.log("Home Page");
  return (
    <Layout>
      <SEO title="Home" description="Green Site Pass HomePage" />
      <Header
        title="Home Page"
        subtitle="Start by navigation as visitor or Business"
      />

      <Content>
        <Grid column spacing="20">
          <Link to="/visitor/register">
            <CardImage image={visitorImage} caption="Visitor" />
          </Link>
          <Link to="/hub/register">
            <CardImage image={hubImage} caption="Business" />
          </Link>
        </Grid>
      </Content>
    </Layout>
  );
}

export default Home;
