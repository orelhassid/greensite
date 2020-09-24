import React from "react";
import RegisterZonesForm from "../../components/forms/business/RegisterZonesForm";
import Layout, { Header, Content } from "../../components/layout";
function RegisterZonesPage() {
  return (
    <Layout>
      <Header title="Zones" subtitle="Adding zones to your site" />
      <Content>
        <RegisterZonesForm />
      </Content>
    </Layout>
  );
}

export default RegisterZonesPage;
