import React from "react";
import { useHistory } from "react-router-dom";
import Layout, { Header, Content, Footer } from "../../components/layout";
import visitorService from "../../services/visitorService";
function RegisterSuccessPage() {
  const visitorId = visitorService.getVisitor();
  const history = useHistory();

  console.log(visitorId);
  // Redirect the user if not logged in
  if (!visitorId) history.push("/");
  return (
    <Layout>
      <Header
        title="Registration Sucess!"
        subtitle="Create your anonymous ID in GreenSite Pass"
      />
      <Content>
        <h3>Your personal CID is</h3>
        <h2>{visitorId}</h2>
      </Content>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
