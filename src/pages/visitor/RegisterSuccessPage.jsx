import React, { useState, useEffect } from "react";
import Layout, {
  Content,
  Footer,
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

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await visitorService.getVisitor();
        setVisitor(data);
        toast.success(
          `Registration Success! ${data.name ? `Welcome ${data.name}` : ""}`
        );
      } catch (error) {
        console.error(error);
        setVisitor(false);
        return toast.error("User not Found");
        // return history.push("/visitor/register");
      }
    }
    fetch();
  }, []);

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
            <p style={{ marginBottom: 0 }} onClick={(e) => copyToClipboard(e)}>
              Your personal CID is
            </p>
            <h1>{visitor.cid}</h1>
            <div className="image" onClick={(e) => copyToClipboard(e)}>
              {/* <QrcodeIcon /> */}
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
          </div>
        )}
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default RegisterSuccessPage;
