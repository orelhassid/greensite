import React, { useContext } from "react";
import CheckOutZoneForm from "../../components/forms/visitor/CheckOutZoneForm";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
import { useParams } from "react-router-dom";
import { VisitorContext } from "../../contexts/VisitorContext";
import Button from "../../components/elements/Button";

function CheckOutZonePage() {
  const { location, checkout } = useContext(VisitorContext);

  const params = useParams();

  const handleCheckout = async () => {
    console.log("Params", params);
    try {
      await checkout(params);
      console.log("Checkout");
    } catch (error) {
      console.error("Checkout", error);
    }
  };

  return (
    <Layout>
      <Navigation />
      <SEO
        description="Your are currently checked-in at"
        title={location.name}
      />

      <PageTitle
        subtitle="Your are currently checked-in at"
        title={location.name}
        custom
      />

      <Content>
        <Button
          label="check-out"
          // link={`/visitor/checkout/${location.hid}`}
          onClick={handleCheckout}
        />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
