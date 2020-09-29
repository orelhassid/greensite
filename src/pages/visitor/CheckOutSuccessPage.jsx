import React, { useEffect, useState } from "react";

import Layout, {
  Content,
  Grid,
  Navigation,
  SEO,
} from "../../components/layout";
import Button from "../../components/elements/Button";
import hubService from "../../services/hubService";
import { useParams, useHistory } from "react-router-dom";

function CheckOutSuccessPage() {
  const [hub, setHub] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log(params);
    async function fetch() {
      try {
        const hubObject = JSON.parse(localStorage.getItem("hub"));

        setHub(hubObject);
      } catch (error) {}
    }
    fetch();
  }, [params]);

  const handleClick = () => {
    history.push(`/visitor/checkin/${hub.hid}`);
  };
  return (
    <Layout>
      <SEO title="Check-out Success" />
      <Navigation />
      <Content>
        <Grid>
          <p>You checked-out from</p>
          <h3>{hub.name}</h3>
          <p>Thanks for using GreenSite Pass!</p>
          <Button label="check-in again" onClick={() => handleClick()} />
        </Grid>
      </Content>
    </Layout>
  );
}

export default CheckOutSuccessPage;
