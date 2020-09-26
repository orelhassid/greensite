import React from "react";
import Layout, { Header, Content, SEO } from "../../components/layout";
import RegisterHubForm from "../../components/forms/business/RegisterHubForm";

function RegisterHubPage() {
  return (
    <Layout>
      <SEO
        title="Business/Site Registration"
        description="Enter your site information"
      />
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
