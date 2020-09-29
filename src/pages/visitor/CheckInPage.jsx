import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CheckInForm from "../../components/forms/visitor/CheckInForm";
import CheckinManually from "../../components/forms/visitor/CheckinManually";
import Layout, { Header, Content, SEO } from "../../components/layout";
import hubService from "../../services/hubService";
import visitorService from "../../services/visitorService";
function CheckInPage() {
  const history = useHistory();

  const params = useParams();
  const [location, setLocation] = useState({});

  if (!visitorService.isLogin()) history.push("/visitor/register");

  // Verify Hubid
  useEffect(() => {
    async function fetch() {
      try {
        const result = await hubService.getHub(params.hid);

        setLocation(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [history, params]);

  return (
    <Layout>
      <SEO title="Check-in" description="Start your visit in Betta Cafe" />
      <Header
        title="Check-in"
        subtitle={`Start your visit in ${location.name}`}
      />
      <Content>
        {/* {paramsObject.hid ? <CheckInForm /> : <CheckinManually />} */}
        {params.hid ? <CheckInForm /> : "Please Scan QR Code to checkin"}
      </Content>
    </Layout>
  );
}

export default CheckInPage;
