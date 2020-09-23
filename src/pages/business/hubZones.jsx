import React from "react";
import Layout, { Header, Content } from "../../components/layout";
import Card from "../../components/cards/Card";
function HubRegisterZone() {
  return (
    <Layout>
      <Header title="Zones" subtitle="Adding zones to your site" />
      <Content>
        Zone list
        <Card />
      </Content>
    </Layout>
  );
}

export default HubRegisterZone;
