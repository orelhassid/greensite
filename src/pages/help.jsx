import React, { useState } from "react";
import Layout, { Header, Content } from "../components/layout";
import useMarkdown from "../hooks/useMarkdown";

function HelpPage() {
  const [markdown, setMarkdown] = useState();
  useMarkdown(setMarkdown);

  return (
    <Layout>
      <Header title="Help Page" />
      <Content>
        <section>
          <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
        </section>
      </Content>
    </Layout>
  );
}

export default HelpPage;
