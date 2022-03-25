import React from "react";

import "./error.scss";

import Icons from "../../assets/icons";
const ErrorPage = () => {
  return (
    <main className="error-page">
      <Icons.PageNotFound width={"600px"} height={"500px"} />
    </main>
  );
};

export default ErrorPage;
