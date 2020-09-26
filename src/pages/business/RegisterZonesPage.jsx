import React from "react";
import RegisterZonesForm from "../../components/forms/business/RegisterZonesForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
function RegisterZonesPage() {
  return (
    <Layout>
      <SEO title="Zones" description="Adding zones to your site" />
      <Header title="Zones" subtitle="Adding zones to your site" />
      <Content>
        <RegisterZonesForm />
      </Content>
    </Layout>
  );
}

export default RegisterZonesPage;
