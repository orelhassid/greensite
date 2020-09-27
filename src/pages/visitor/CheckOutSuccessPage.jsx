import React, { useEffect, useState } from "react";

import Layout, {
  Content,
  Grid,
  Navigation,
  SEO,
} from "../../components/layout";
import Button from "../../components/elements/Button";
import hubService from "../../services/hubService";
import { useParams } from "react-router-dom";

function CheckOutSuccessPage() {
  const [hub, setHub] = useState({});
  const params = useParams();
  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await hubService.getHub(params.hid);
        setHub(data);
      } catch (error) {}
    }
    fetch();
  }, [params]);

  return (
    <Layout>
      <SEO title="Check-out Success" />
      <Navigation />
      <Content>
        <Grid>
          <p>You checked-out from</p>
          <h3>{hub.name}</h3>
          <p>Thanks for using GreenSite Pass!</p>
          <Button label="check-in again" />
        </Grid>
      </Content>
    </Layout>
  );
}

export default CheckOutSuccessPage;
