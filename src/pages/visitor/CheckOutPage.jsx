import React, { useContext } from "react";

import Layout, {
  Content,
  Navigation,
  PageTitle,
  SEO,
} from "../../components/layout";
import CheckOutForm from "../../components/forms/visitor/CheckOutForm";
import { VisitorContext } from "../../contexts/VisitorContext";

function CheckOutPage() {
  const { location } = useContext(VisitorContext);

  return (
    <Layout>
      <Navigation />
      <SEO title={location.name} />

      <PageTitle
        subtitle="Your are currently checked-in at"
        title={location.name}
        custom
      />
      <Content>
        {/* <CheckOutForm hub={location} zone={zone} /> */}
        <CheckOutForm />
      </Content>
    </Layout>
  );
}

export default CheckOutPage;
