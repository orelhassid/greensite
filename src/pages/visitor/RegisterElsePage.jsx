import React from "react";
import RegisterElseForm from "../../components/forms/visitor/RegisterElseForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
function RegisterElsePage() {
  return (
    <Layout>
      <SEO
        title="Someone Else Registeration"
        description="Create anonymous ID for someone else in GreenSite Pass"
      />
      <Header
        title="Someone Else Registeration"
        subtitle="Create anonymous ID for someone else in GreenSite Pass"
      />
      <Content>
        <RegisterElseForm />
      </Content>
    </Layout>
  );
}

export default RegisterElsePage;
