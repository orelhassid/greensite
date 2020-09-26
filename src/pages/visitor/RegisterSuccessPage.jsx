import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ButtonLink from "../../components/elements/ButtonLink";
import Layout, { Content, Footer } from "../../components/layout";
import visitorService from "../../services/visitorService";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
import { ReactComponent as Background1 } from "../../assets/images/background-1.svg";

import "../pages.scss";

function RegisterSuccessPage() {
  const [visitor, setVisitor] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function fetch() {
      try {
        const result = await visitorService.getVisitor();
        console.log(result);
        setVisitor(result);
      } catch (error) {
        history.push("/");
      }
    }
    fetch();
  }, [history]);

  // Redirect the user if not logged in
  return (
    <Layout>
      {/* <Header
      // title="Registration Sucess!"
      // subtitle="Create your anonymous ID in GreenSite Pass"
      /> */}
      <Content>
        {/* <Grid> */}
        <div className="success-page">
          <p style={{ marginBottom: 0 }}>Your personal CID is</p>
          <h1>{visitor.key}</h1>
          <div className="image">
            <Qrcode />
          </div>
          <p>Thanks for using GreenSite Pass!</p>
          <ButtonLink
            label="back to check-in"
            link="/visitor/checkin"
          ></ButtonLink>
          <div className="background">
            <Background1 />
          </div>
        </div>
        {/* </Grid> */}
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
