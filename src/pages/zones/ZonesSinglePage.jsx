import React, { useState, useEffect, useContext } from "react";
import Layout, {
  Content,
  Navigation,
  PageTitle,
} from "../../components/layout";

import hubService from "../../services/hubService";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/cards/Card";
import { HubContext } from "../../contexts/HubContext";

function ZonesSinglePage() {
  const [loading, setLoading] = useState(false);
  const [zone, setZone] = useState({});
  const history = useHistory();
  const params = useParams();
  const { hub, zones } = useContext(HubContext);

  useEffect(() => {
    console.log(zones);
    const data = zones.find((zone) => zone.zone_id === params.zid);
    setZone(data);
  }, []);

  return (
    <Layout>
      <Navigation />
      <PageTitle title={hub.name} subtitle="Single Page for QR Code" />

      <Content>{loading && <Card zone={zone} />}</Content>
    </Layout>
  );
}

export default ZonesSinglePage;
