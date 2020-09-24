import React from "react";
import LoginVisitorForm from "../../components/forms/visitor/LoginVisitorForm";
import Layout, { Header, Content } from "../../components/layout";
function LoginVisitorPage() {
  return (
    <Layout>
      <Header title="Visitor Login" subtitle="Login into your account" />
      <Content>
        <LoginVisitorForm />
      </Content>
    </Layout>
  );
}

export default LoginVisitorPage;
