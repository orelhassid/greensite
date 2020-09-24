import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/elements/Button";
import Layout, { Header, Content, Footer, Grid } from "../../components/layout";
import visitorService from "../../services/visitorService";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
import { ReactComponent as Background1 } from "../../assets/images/background-1.svg";

import "../pages.scss";

function RegisterSuccessPage() {
  const visitorId = visitorService.getVisitor();
  const history = useHistory();

  console.log(visitorId);
  // Redirect the user if not logged in
  if (!visitorId) history.push("/");
  return (
    <Layout>
      {/* <Header
      // title="Registration Sucess!"
      // subtitle="Create your anonymous ID in GreenSite Pass"
      /> */}
      <Content>
        {/* <Grid> */}
        <div className="success-page">
          <p style={{}}>Your personal CID is</p>
          <h1>{visitorId}</h1>
          <div className="image">
            <Qrcode />
          </div>
          <p>Thanks for using GreenSite Pass!</p>
          <Button label="back to check-in"></Button>
          <div className="background">
            <Background1 />
          </div>
        </div>
        {/* </Grid> */}
      </Content>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
