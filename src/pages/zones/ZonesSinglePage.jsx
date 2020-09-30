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
import Loader from "../../components/elements/Loader";

function ZonesSinglePage() {
  const [loading, setLoading] = useState(false);
  const [zone, setZone] = useState({});
  const history = useHistory();
  const params = useParams();
  const { hub } = useContext(HubContext);

  useEffect(() => {
    async function fetch() {
      try {
        if (hub) {
          // const zones = await hubService.getZones(hub.hid);
          const { data } = await hubService.getZone(
            params.hid,
            parseInt(params.zid)
          );
          setLoading(true);
          setZone(data);
        }
      } catch (error) {}
    }
    fetch();
  }, [hub]);

  return (
    <Layout>
      <Navigation />
      {loading ? (
        <>
          <PageTitle title={hub.name} subtitle="Single Page for QR Code" />

          <Content>
            {" "}
            <Card zone={zone} />{" "}
          </Content>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

export default ZonesSinglePage;
