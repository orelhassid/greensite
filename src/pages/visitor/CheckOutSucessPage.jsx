import React, { useEffect } from "react";

import { ReactComponent as CheckOutIcon } from "../../assets/icons/checkout.svg";

import Layout, { Content, Navigation, SEO } from "../../components/layout";
import Button from "../../components/elements/Button";

function CheckOutSucessPage() {
  useEffect(() => {
    // async function fetch() {}
  }, []);

  return (
    <Layout>
      <SEO title="Check-out Success" />
      <Navigation />
      <Content>
        <h1>Checked Out Sucess</h1>
        <Button label="check-out" icon={<CheckOutIcon />}></Button>
      </Content>
    </Layout>
  );
}

export default CheckOutSucessPage;
