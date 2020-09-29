import React, { useContext, useEffect, useState } from "react";
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
import { VisitorContext } from "../../contexts/VisitorContext";

function CheckOutPage() {
  // const location = useLocation();
  const [hub, setHub] = useState({});
  const [zone, setZone] = useState({});
  const params = useParams();
  const { location } = useContext(VisitorContext);

  useEffect(() => {
    async function fetch() {
      try {
        const hubObject = JSON.parse(localStorage.getItem("hub"));

        setHub(hubObject);
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
        <CheckOutForm hub={hub} zone={zone} />
      </Content>
    </Layout>
  );
}

export default CheckOutPage;
