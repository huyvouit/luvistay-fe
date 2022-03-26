import React from "react";
import { Helmet } from "react-helmet";

const Canonical = (props) => {
  const { title, href } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={href} />
    </Helmet>
  );
};

export default Canonical;
