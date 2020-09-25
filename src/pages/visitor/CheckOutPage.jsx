import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import Layout, {
  HeaderCustom,
  Content,
  PageCover,
} from "../../components/layout";
import CheckOutForm from "../../components/forms/visitor/CheckOutForm";

function CheckOutPage() {
  // const location = useLocation();
  useEffect(() => {
    // async function fetch() {}
  }, []);

  return (
    <Layout>
      <HeaderCustom
        subtitle="Your are currently checked-in at"
        title={`Betta cafe`}
      >
        <PageCover />
      </HeaderCustom>
      <Content>
        <CheckOutForm />
      </Content>
    </Layout>
  );
}

export default CheckOutPage;
