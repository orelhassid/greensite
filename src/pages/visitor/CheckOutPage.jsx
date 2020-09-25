import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// import CheckInForm from "../../components/forms/visitor/CheckInForm";
import Layout, { Header, Content } from "../../components/layout";

function CheckOutPage() {
  const location = useLocation();
  const zoneId = queryString.parse(location.search);
  useEffect(() => {
    async function fetch() {}
  }, []);

  return (
    <Layout>
      <Header title="Check-out" subtitle={`Start your visit in Betta Cafe`} />
      <Content></Content>
    </Layout>
  );
}

export default CheckOutPage;
