import React, { useState, useEffect } from "react";
import Layout, { Content, Footer } from "../../components/layout";
import { useHistory } from "react-router-dom";

import visitorService from "../../services/visitorService";
import ButtonLink from "../../components/elements/ButtonLink";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
import { ReactComponent as Background1 } from "../../assets/images/background-1.svg";

import "../pages.scss";
import { toast } from "react-toastify";

/* -------------------------------- Component ------------------------------- */
function RegisterSuccessPage() {
  const [visitor, setVisitor] = useState("");
  const history = useHistory();

  useEffect(() => {
    const result = visitorService.getVisitor();
    setVisitor(result);
    SuccessNotification();
  }, [history]);

  const SuccessNotification = () => {
    toast.success(
      `Registration Success! ${visitor.name ? `Welcome ${visitor.name}` : ""}`
    );
  };

  return (
    <Layout>
      <Content>
        <div className="success-page">
          <p style={{ marginBottom: 0 }}>Your personal CID is</p>
          <h1>{visitor.key}</h1>
          <div className="image">
            <Qrcode />
          </div>
          <p>Thanks for using GreenSite Pass!</p>
          <ButtonLink
            label="Go to check-in"
            link="/visitor/checkin"
          ></ButtonLink>
          <div className="background">
            <Background1 />
          </div>
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
