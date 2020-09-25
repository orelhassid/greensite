import React, { useEffect, useState } from "react";
import Layout, { Header, Content } from "../components/layout";
import marked from "marked";

function HealthPage() {
  const [markdown, setMarkdown] = useState();
  useEffect(() => {
    const readmePath = require("../assets/content/healthPage.md");
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, []);
  return (
    <Layout>
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
