import React from "react";
import CheckInForm from "../../components/forms/visitor/CheckInForm";
import Layout, { Header, Content } from "../../components/layout";
function CheckInPage() {
  return (
    <Layout>
      <Header title="Check-in" subtitle={`Start your visit in Betta Cafe`} />
      <Content>
        <CheckInForm />
      </Content>
    </Layout>
  );
}

export default CheckInPage;
