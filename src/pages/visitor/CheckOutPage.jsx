import React from "react";
import { useLocation } from "react-router-dom";
// import CheckInForm from "../../components/forms/visitor/CheckInForm";
import Layout, { Header, Content } from "../../components/layout";
function CheckOutPage() {
  const location = useLocation();
  console.log("Location", location);
  return (
    <Layout>
      <Header title="Check-out" subtitle={`Start your visit in Betta Cafe`} />
      <Content></Content>
    </Layout>
  );
}

export default CheckOutPage;
