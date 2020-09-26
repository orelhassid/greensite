import React, { useState, useEffect } from "react";
import Layout, { Header, Content, Grid } from "../../components/layout";
import Card from "../../components/cards/Card";
// import HubCard from "../../components/cards/HubCard";
import { getZones } from "../../services/hubService";
import { getHub } from "../../services/hubService";
import { useHistory } from "react-router-dom";

function ZonesPage() {
  const [zones, setZones] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const hubid = getHub();
        const result = await getZones(hubid);
        console.log("Result", result);
        setZones(result);
      } catch (error) {
        history.push("/hub/register");
      }
    }
    fetchData();
  }, [history]);

  return (
    <Layout>
      <Header title="QR Codes" subtitle="Track you zones" />
      <Content>
        {/* <HubCard zone={zoneHub} /> */}
        <Grid spacing="30">
          {zones.map((zone) => (
            <Card key={zone.id} zone={zone} />
          ))}
        </Grid>
      </Content>
    </Layout>
  );
}

export default ZonesPage;
