import React, { useState, useEffect } from "react";
import Layout, { Header, Content, Grid } from "../../components/layout";
import Card from "../../components/cards/Card";
// import HubCard from "../../components/cards/HubCard";
import { getZones } from "../../services/zonesService";

function ZonesPage() {
  const [zones, setZones] = useState([]);
  // const [zoneHub, setZoneHub] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getZones();
      // const zoneHubObject = await getZoneHub();
      // setZoneHub(zoneHubObject)
      setZones(result);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Header title="QR Codes" subtitle="Track you zones" />
      <Content>
        {/* <HubCard zone={zoneHub} /> */}
        <Grid spacing="30">
          {zones.map((zone) => (
            <Card key={zone.zoneId} zone={zone} />
          ))}
        </Grid>
      </Content>
    </Layout>
  );
}

export default ZonesPage;
