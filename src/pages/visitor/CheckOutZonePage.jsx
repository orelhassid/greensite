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
  const [loading, setLoading] = useState(false);

  const params = useParams();
  useEffect(() => {
    async function fetch() {
      try {
        const hubObject = JSON.parse(localStorage.getItem("hub"));
        setLoading(true);
        setHub(hubObject);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [params]);
  return (
    <Layout>
      <Navigation />
      <SEO description="Your are currently checked-in at" title={hub.name} />
      {loading && (
        <>
          <PageTitle
            subtitle="Your are currently checked-in at"
            title={hub.name}
          />

          <Content>
            <ButtonLink
              label="continue"
              link={`/visitor/checkout/${params.hid}`}
            />
            <br />
            <CheckOutZoneForm />
          </Content>
        </>
      )}
    </Layout>
  );
}

export default CheckOutZonePage;
