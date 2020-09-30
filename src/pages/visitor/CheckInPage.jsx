import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import CheckInForm from "../../components/forms/visitor/CheckInForm";
import CheckinManually from "../../components/forms/visitor/CheckinManually";
import Layout, { Header, Content, SEO } from "../../components/layout";
import { VisitorContext } from "../../contexts/VisitorContext";
import visitorService from "../../services/visitorService";
function CheckInPage() {
  const history = useHistory();

  const params = useParams();
  const locationRouter = useLocation();
  const { visitor, location, storeLocation } = useContext(VisitorContext);

  // Verify Hubid
  useEffect(() => {
    // if (!visitorService.isLogin()) history.push("/visitor/register");
    async function fetch() {
      try {
        await storeLocation(params);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [history, params]);

  if (!visitorService.isLogin()) {
    return (
      <Redirect
        to={{
          pathname: "/visitor/register",
          state: { from: locationRouter },
        }}
      />
    );
  }
  return (
    <Layout>
      <SEO
        title="Check-in"
        description={`Start your visit in ${location.name}`}
      />
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
