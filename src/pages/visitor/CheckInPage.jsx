import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CheckInForm from "../../components/forms/visitor/CheckInForm";
import CheckinManually from "../../components/forms/visitor/CheckinManually";
import Layout, { Header, Content, SEO } from "../../components/layout";
import hubService from "../../services/hubService";
import visitorService from "../../services/visitorService";
function CheckInPage() {
  const [paramsObject, setParamsObject] = useState({});

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    setParamsObject(params);
    if (!visitorService.isLogin()) history.push("/visitor/register");
    async function fetch() {
      try {
        const result = await hubService.getHub();
        console.log("Result", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [history, params]);

  return (
    <Layout>
      <SEO title="Check-in" description="Start your visit in Betta Cafe" />
      <Header title="Check-in" subtitle={`Start your visit in EchoPlus`} />
      <Content>
        {paramsObject.hid ? <CheckInForm /> : <CheckinManually />}
      </Content>
    </Layout>
  );
}

export default CheckInPage;
