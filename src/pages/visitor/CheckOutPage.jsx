import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import Layout, {
  Content,
  Navigation,
  PageTitle,
} from "../../components/layout";
import CheckOutForm from "../../components/forms/visitor/CheckOutForm";

function CheckOutPage() {
  // const location = useLocation();
  useEffect(() => {
    // async function fetch() {}
  }, []);

  return (
    <Layout>
      <Navigation />
      <PageTitle
        subtitle="Your are currently checked-in at"
        title={`Betta cafe`}
      />
      <Content>
        <CheckOutForm />
      </Content>
    </Layout>
  );
}

export default CheckOutPage;
