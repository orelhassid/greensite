import React, { useContext } from "react";
import CheckOutZoneForm from "../../components/forms/visitor/CheckOutZoneForm";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
import { useHistory, useParams } from "react-router-dom";
import { VisitorContext } from "../../contexts/VisitorContext";
import Button from "../../components/elements/Button";

function CheckOutZonePage() {
  const { location, checkout } = useContext(VisitorContext);

  const history = useHistory();
  const params = useParams();
  const handleCheckout = () => {
    console.log("Checkout Zone Params", params);
    history.push(`/visitor/checkout/${location.hid}`);
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
          // link={``}
          onClick={handleCheckout}
        />
        <br />
        <CheckOutZoneForm />
      </Content>
    </Layout>
  );
}

export default CheckOutZonePage;
