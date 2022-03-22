import React from "react";
import headerStar from "../../assets/images/header_star.png";

import "./PageHeader.scss";

const PageHeader = (props) => {
  const { title } = props;

  return (
    <main className="page-header">
      <section className="page-header-star">
        <img src={headerStar} alt="header star" title="five star" />
      </section>
      <section className="page-header-title">
        <h1>{title}</h1>
      </section>
    </main>
  );
};

export default PageHeader;
