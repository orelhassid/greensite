import React from "react";
import LoginHubForm from "../../components/forms/business/LoginHubForm";
import Layout, { Header, Content } from "../../components/layout";
function LoginHubPage() {
  return (
    <Layout>
      <Header title="Login" subtitle="loggin into your hub account" />
      <Content>
        <LoginHubForm />
      </Content>
    </Layout>
  );
}

export default LoginHubPage;
