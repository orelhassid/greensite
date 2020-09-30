import React, { useContext } from "react";
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

function ZonesPage() {
  const { hub, zones } = useContext(HubContext);

  const generateZoneLink = (zone) => {
    return `/visitor/checkin/${zone.hid}/${zone.zone_id}`;
  };
  return (
    <Layout>
      <SEO title="QR Codes" description="Track you zones" />
      <Header title="QR Codes" subtitle="Track you zones" />
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
    </Layout>
  );
}

export default ZonesPage;
