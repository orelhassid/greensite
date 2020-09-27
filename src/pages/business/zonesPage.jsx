import React, { useState, useEffect } from "react";
import Layout, { Header, Content, Grid, SEO } from "../../components/layout";
import Card from "../../components/cards/Card";
import HubCard from "../../components/cards/HubCard";
// import HubCard from "../../components/cards/HubCard";
import { getZones } from "../../services/hubService";
import { getHub } from "../../services/hubService";
import { useHistory } from "react-router-dom";

function ZonesPage() {
  const [zones, setZones] = useState([]);
  const [hub, setHub] = useState({});

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const zonesData = await getZones();
        const { data: hubData } = await getHub();
        setHub(hubData);
        setZones(zonesData);
        setLoading(true);
      } catch (error) {
        console.error(error);
        history.push("/hub/register");
      }
    }
    fetchData();
  }, [history]);

  const generateZoneLink = (zone) => {
    return `/visitor/checkin/${zone.hid}/${zone.zone_id}`;
  };
  return (
    <Layout>
      <SEO title="QR Codes" description="Track you zones" />
      <Header title="QR Codes" subtitle="Track you zones" />
      <Content>
        {loading ? (
          <Grid spacing="30">
            <HubCard hub={hub} />
            <hr />
            {zones.map((zone) => {
              const link = generateZoneLink(zone);
              return <Card key={zone.zone_id} zone={zone} link={link} />;
            })}
          </Grid>
        ) : (
          "Loading..."
        )}
      </Content>
    </Layout>
  );
}

export default ZonesPage;
