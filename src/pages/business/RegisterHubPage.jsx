import React from "react";
import Layout, { Header, Content, SEO } from "../../components/layout";
import RegisterHubForm from "../../components/forms/business/RegisterHubForm";
import { useHistory } from "react-router-dom";

function RegisterHubPage() {
  const history = useHistory();
  if (localStorage.getItem("hub-key")) {
    history.push("/hub/zones");
  }
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
