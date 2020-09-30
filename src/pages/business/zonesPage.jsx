import React, { useContext, useEffect, useState } from "react";
import Layout, {
  Header,
  Content,
  Grid,
  SEO,
  ActionBar,
} from "../../components/layout";
import Card from "../../components/cards/Card";
import HubCard from "../../components/cards/HubCard";
import { HubContext } from "../../contexts/HubContext";
import hubService from "../../services/hubService";
import Loader from "../../components/elements/Loader";

function ZonesPage() {
  const { hub } = useContext(HubContext);
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        if (hub) {
          const zonesData = await hubService.getZones(hub.hid);
          setZones(zonesData);
          setLoading(true);
        }
      } catch (error) {}
    }
    fetch();
  }, [hub]);

  const generateZoneLink = (zone) => {
    return `/visitor/checkin/${zone.hid}/${zone.zone_id}`;
  };
  return (
    <Layout>
      <SEO title="QR Codes" description="Track you zones" />
      <Header title="QR Codes" subtitle="Track you zones" />
      {loading ? (
        <Content>
          <ActionBar />
          <Grid spacing="30">
            <HubCard hub={hub} />
            <hr />
            {zones.map((zone) => {
              const link = generateZoneLink(zone);
              return <Card key={zone.zone_id} zone={zone} link={link} />;
            })}
          </Grid>
        </Content>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

export default ZonesPage;
