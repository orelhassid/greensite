import React, { useContext } from "react";
import Layout, {
  Content,
  FlexBox,
  Footer,
  Grid,
  Navigation,
  SEO,
} from "../../components/layout";

import ButtonLink from "../../components/elements/ButtonLink";
import { ReactComponent as Background1 } from "../../assets/images/background-1.svg";

import "../pages.scss";
import { toast } from "react-toastify";
import QRCodeElement from "../../components/elements/QRCodeElement";
import { VisitorContext } from "../../contexts/VisitorContext";

/* -------------------------------- Component ------------------------------- */
function RegisterSuccessPage() {
  const { visitor } = useContext(VisitorContext);

  console.log("Checkin", visitor);
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(visitor.cid);
    toast.success("Copy to clipboard");
  };

  return (
    <Layout>
      <SEO title="Visitor Success Page" />
      <Navigation />

      <Content>
        {visitor && (
          <div className="success-page">
            <FlexBox column center spacing="15">
              <p style={{ marginBottom: 0 }}>Your personal CID is</p>
              <h1 onClick={(e) => copyToClipboard(e)}>{visitor.cid}</h1>
              <div className="image" onClick={(e) => copyToClipboard(e)}>
                <QRCodeElement link={visitor.cid} />
              </div>
              <p>Thanks for using GreenSite Pass!</p>
              <ButtonLink
                label="Go to check-in"
                link="/visitor/checkin"
              ></ButtonLink>

              <div className="background">
                <Background1 />
              </div>
            </FlexBox>
          </div>
        )}
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
