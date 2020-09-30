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
import Loader from "../../components/elements/Loader";

function ZonesPage() {
  const { hub, zones } = useContext(HubContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (zones) setLoading(true);
  }, [zones]);

  const generateZoneLink = (zone) => {
    return `/visitor/checkin/${zone.hid}/${zone.zone_id}`;
  };
  return (
    <Layout>
      <SEO title="QR Codes" description="Manage your site" />
      <Header title="QR Codes" subtitle="Manage your site" />
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
