import React, { useContext, useEffect } from "react";

import Layout, {
  Content,
  Grid,
  Navigation,
  SEO,
} from "../../components/layout";
import Button from "../../components/elements/Button";
import { useParams, useHistory } from "react-router-dom";
import { VisitorContext } from "../../contexts/VisitorContext";

function CheckOutSuccessPage() {
  const params = useParams();
  const history = useHistory();

  const { location } = useContext(VisitorContext);
  console.log("Location", location);
  useEffect(() => {
    console.log(params);
    async function fetch() {
      try {
        // const hubObject = JSON.parse(localStorage.getItem("hub"));
      } catch (error) {}
    }
    fetch();
  }, [params]);

  const handleClick = () => {
    history.push(`/visitor/checkin/${location.hid}`);
  };
  return (
    <Layout>
      <SEO title="Check-out Success" />
      <Navigation />
      <Content>
        <Grid>
          <p>You checked-out from</p>
          <h3>{location.name}</h3>
          <p>Thanks for using GreenSite Pass!</p>
          <Button label="check-in again" onClick={() => handleClick()} />
        </Grid>
      </Content>
    </Layout>
  );
}

export default CheckOutSuccessPage;
