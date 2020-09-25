import React from "react";
import ButtonLink from "../../components/elements/ButtonLink";
import CheckOutZoneForm from "../../components/forms/visitor/CheckOutZoneForm";

import Layout, {
  HeaderCustom,
  Content,
  PageCover,
} from "../../components/layout";
function CheckOutZonePage() {
  return (
    <Layout>
      <HeaderCustom
        subtitle="Your are currently checked-in at"
        title={`Betta cafe`}
      >
        <PageCover />
      </HeaderCustom>
      <Content>
        <ButtonLink label="continue" link="/visitor/checkout" />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
