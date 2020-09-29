import React, { useState, useEffect } from "react";
import Layout, {
  Content,
  Navigation,
  PageTitle,
} from "../../components/layout";

import hubService from "../../services/hubService";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/cards/Card";

function ZonesSinglePage() {
  const [zone, setZone] = useState([]);
  const [hub, setHub] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { hid, zid } = params;
        const { data } = await hubService.getZone(hid, zid);
        const hubData = await hubService.getHub(hid);
        setHub(hubData);
        setZone(data);
        setLoading(true);
      } catch (error) {
        // history.push("/hub/register");
        console.error("Get Zone Failed", error);
      }
    }
    fetchData();
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
