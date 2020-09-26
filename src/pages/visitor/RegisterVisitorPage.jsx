import React from "react";
import RegisterVisitorForm from "../../components/forms/visitor/RegisterVisitorForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
function RegisterVisitorPage() {
  return (
    <Layout>
      <SEO
        title="Visitor Registeration"
        description="Create your anonymous ID in GreenSite Pass"
      />
      <Header
        title="Visitor Registeration"
        subtitle="Create your anonymous ID in GreenSite Pass"
      />
      <Content>
        <RegisterVisitorForm />
      </Content>
    </Layout>
  );
}

export default RegisterVisitorPage;
