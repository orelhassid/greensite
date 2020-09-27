import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
import CheckOutForm from "../../components/forms/visitor/CheckOutForm";
import hubService from "../../services/hubService";
import { useParams } from "react-router-dom";

function CheckOutPage() {
  // const location = useLocation();
  const [hub, setHub] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await hubService.getHub(params.hid);
        setHub(data);
      } catch (error) {}
    }
    fetch();
  }, [params]);

  return (
    <Layout>
      <Navigation />
      <SEO title={hub.name} />
      <PageTitle subtitle="Your are currently checked-in at" title={hub.name} />
      <Content>
        <CheckOutForm hub={hub} />
      </Content>
    </Layout>
  );
}

export default CheckOutPage;
