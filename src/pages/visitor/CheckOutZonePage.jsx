import React, { useContext, useEffect, useState } from "react";

import ButtonLink from "../../components/elements/ButtonLink";
import CheckOutZoneForm from "../../components/forms/visitor/CheckOutZoneForm";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
import { useParams } from "react-router-dom";
import { VisitorContext } from "../../contexts/VisitorContext";

function CheckOutZonePage() {
  // const [hub, setHub] = useState({});
  // const [loading, setLoading] = useState(false);

  const { location } = useContext(VisitorContext);
  console.log("location", location);
  // const params = useParams();

  return (
    <Layout>
      <Navigation />
      <SEO
        description="Your are currently checked-in at"
        title={location.name}
      />

      <PageTitle
        subtitle="Your are currently checked-in at"
        title={location.name}
      />

      <Content>
        <ButtonLink
          label="continue"
          link={`/visitor/checkout/${location.hid}`}
        />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
