import React from "react";
import Layout, { Header, Content } from "../../components/layout";
// import RegisterHubForm from "../../components/forms/RegisterHubForm";
import RegisterHubForm from "../../components/forms/RegisterHubForm";

function HubRegister() {
  return (
    <Layout>
      <Header title="Registration" subtitle="Enter your site information" />
      <Content>
        {/* <RegisterHubForm /> */}
        <RegisterHubForm />
      </Content>
    </Layout>
  );
}

export default HubRegister;
