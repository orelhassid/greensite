import React from "react";
import Layout, { Header, Content } from "../../components/layout";
import RegisterHubForm from "../../components/forms/business/RegisterHubForm";

function RegisterHubPage() {
  return (
    <Layout>
      <Header
        title="Business/Site Registration"
        subtitle="Enter your site information"
      />
      <Content>
        <RegisterHubForm />
      </Content>
    </Layout>
  );
}

export default RegisterHubPage;
