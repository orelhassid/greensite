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
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { hid, zid } = params;
        console.log(params);
        const { data } = await hubService.getZone(hid, zid);
        setZone(data);
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
      <PageTitle title="Betta Caffe" subtitle="Single Page for QR Code" />

      <Content>
        <Card zone={zone} />
      </Content>
    </Layout>
  );
}

export default ZonesSinglePage;
