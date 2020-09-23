import React, { useState, useEffect } from "react";
import Layout, { Header, Content, Grid } from "../../components/layout";
import Card from "../../components/cards/Card";
import { getZones } from "../../services/zonesService";

function HubRegisterZone() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getZones();
      setZones(result);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Header title="Zones" subtitle="Adding zones to your site" />
      <Content>
        <Grid>
          {zones.map((zone) => (
            <Card key={zone.zoneId} zone={zone} />
          ))}
        </Grid>
      </Content>
    </Layout>
  );
}

export default HubRegisterZone;
