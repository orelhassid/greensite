import React, { useState, useEffect } from "react";
import Layout, {
  Content,
  Header,
  Navigation,
  PageTitle,
} from "../../components/layout";

import hubService from "../../services/hubService";
import { useHistory, useParams } from "react-router-dom";

function HubSingleZonePage() {
  const [zone, setZone] = useState([]);
  const history = useHistory();
  const { slug } = useParams();
  console.log("Single", slug);

  useEffect(() => {
    async function fetchData() {
      try {
        // const { data } = await hubService.getZone(params.id);
        // setZone(data);
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
        <h1>Zone Here</h1>
        <ul>
          {Object.entries(zone).map((item) => (
            <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>
          ))}
        </ul>
      </Content>
    </Layout>
  );
}

export default HubSingleZonePage;
