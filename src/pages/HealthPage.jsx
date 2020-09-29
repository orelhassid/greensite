import React, { useState } from "react";
import Layout, { Header, Content, SEO } from "../components/layout";
import useMarkdown from "../hooks/useMarkdown";

function HealthPage() {
  const [markdown, setMarkdown] = useState();
  useMarkdown(setMarkdown);
  return (
    <Layout>
      <SEO title="Health" description="Health Declation Page" />

      <Header title="Health Page" />
      <Content>
        <section>
          <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
        </section>
      </Content>
    </Layout>
  );
}

export default HealthPage;
