import React, { useState, useEffect } from "react";
import Layout, { Content } from "../../components/layout";

import hubService from "../../services/hubService";
import { useHistory, useParams } from "react-router-dom";

function ZoneSinglePage() {
  const [zone, setZone] = useState([]);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await hubService.getZone(params.id);
        console.log("Result", data);
        // setZone(result);
      } catch (error) {
        // history.push("/hub/register");
        console.error("Get Zone Failed", error);
      }
    }
    fetchData();
  }, [params.id]);

  return (
    <Layout>
      <Content>
        <h1>Zone Here</h1>
      </Content>
    </Layout>
  );
}

export default ZoneSinglePage;
