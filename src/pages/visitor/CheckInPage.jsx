import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CheckInForm from "../../components/forms/visitor/CheckInForm";
import Layout, { Header, Content, SEO } from "../../components/layout";
import hubService from "../../services/hubService";
import visitorService from "../../services/visitorService";
function CheckInPage() {
  const [paramsObject, setParamsObject] = useState({});
  const [hub, setHub] = useState({});

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    setParamsObject(params);
    if (!visitorService.isLogin()) history.push("/visitor/register");
    async function fetch() {
      try {
        const result = await hubService.getHub();
        console.log("Result", result);
      } catch (error) {}
    }
    fetch();
  }, []);

  return (
    <Layout>
      <SEO title="Check-in" description="Start your visit in Betta Cafe" />
      <Header title="Check-in" subtitle={`Start your visit in `} />
      <Content>
        {paramsObject.hid ? (
          <CheckInForm />
        ) : (
          "You need To scan QR Code to continue"
        )}
      </Content>
    </Layout>
  );
}

export default CheckInPage;
