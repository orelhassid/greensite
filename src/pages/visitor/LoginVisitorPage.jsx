import React from "react";
import LoginVisitorForm from "../../components/forms/visitor/LoginVisitorForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
function LoginVisitorPage() {
  return (
    <Layout>
      <SEO title="Visitor Login" description="Login into your account" />
      <Header title="Visitor Login" subtitle="Login into your account" />
      <Content>
        <LoginVisitorForm />
      </Content>
    </Layout>
  );
}

export default LoginVisitorPage;
