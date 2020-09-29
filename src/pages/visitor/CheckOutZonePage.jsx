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

function CheckOutZonePage() {
  const [hub, setHub] = useState({});

  const params = useParams();
  useEffect(() => {
    async function fetch() {
      try {
        const hubObject = JSON.parse(localStorage.getItem("hub"));
        setHub(hubObject);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [params]);
  return (
    <Layout>
      <SEO description="Your are currently checked-in at" title={hub.name} />
      <Navigation />
      <PageTitle subtitle="Your are currently checked-in at" title={hub.name} />

      <Content>
        <ButtonLink label="continue" link="/visitor/checkout" />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
