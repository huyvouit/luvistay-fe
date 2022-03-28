import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { base_url } from "../../constants";

const Canonical = (props) => {
  const location = useLocation();

  const { title } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={`${base_url}${location.pathname}`} />
    </Helmet>
  );
};

export default Canonical;
