import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RegisterVisitorForm from "../../components/forms/visitor/RegisterVisitorForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
function RegisterVisitorPage() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("visitor-key")) {
      history.push("/visitor/checkin");
    }
  }, [history]);
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
