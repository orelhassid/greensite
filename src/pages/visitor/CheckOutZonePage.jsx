import React from "react";
import ButtonLink from "../../components/elements/ButtonLink";
import CheckOutZoneForm from "../../components/forms/visitor/CheckOutZoneForm";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
function CheckOutZonePage() {
  return (
    <Layout>
      <SEO description="Your are currently checked-in at" title="Betta cafe" />
      <Navigation />
      <PageTitle
        subtitle="Your are currently checked-in at"
        title={`Betta cafe`}
      />
      <Content>
        <ButtonLink label="continue" link="/visitor/checkout" />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
