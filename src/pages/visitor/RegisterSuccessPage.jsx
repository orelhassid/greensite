import React, { useState, useEffect } from "react";
import Layout, {
  Content,
  Footer,
  Header,
  Navigation,
  SEO,
} from "../../components/layout";

import visitorService from "../../services/visitorService";
import ButtonLink from "../../components/elements/ButtonLink";
import { ReactComponent as Background1 } from "../../assets/images/background-1.svg";

import "../pages.scss";
import { toast } from "react-toastify";
import QRCodeElement from "../../components/elements/QRCodeElement";

/* -------------------------------- Component ------------------------------- */
function RegisterSuccessPage() {
  const [visitor, setVisitor] = useState("");

  const SuccessNotification = () => {
    toast.success(
      `Registration Success! ${visitor.name ? `Welcome ${visitor.name}` : ""}`
    );
  };

  useEffect(() => {
    const result = visitorService.getVisitor();
    console.log("Result", result);
    setVisitor(result);
    SuccessNotification();
  }, []);

  return (
    <Layout>
      <SEO title="Visitor Success Page" />
      <Navigation />

      <Content>
        <div className="success-page">
          <p style={{ marginBottom: 0 }}>Your personal CID is</p>
          <h1>{visitor.cid}</h1>
          <div className="image">
            {/* <QrcodeIcon /> */}
            <QRCodeElement link={visitor.key} />
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
