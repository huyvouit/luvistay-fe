import React from "react";

import "./PageTitle.scss";

const PageTitle = (props) => {
  const { title } = props;

  return (
    <main className="page-title">
      <section className="page-title-contain">
        <h4>{title}</h4>
      </section>
    </main>
  );
};

export default PageTitle;
