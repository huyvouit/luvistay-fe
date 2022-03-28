import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import "./error.scss";

import Icons from "../../assets/icons";
const ErrorPage = () => {
  return (
    <main className="error-page">
      <Icons.PageNotFound width={"600px"} height={"500px"} />
      <p className="basic-text">
        TRANG WEB NÀY KHÔNG TỒN TẠI
      </p>
      
      <section>
        <Link to="/">
          <PrimaryButton title="Quay về trang chủ" action={() => {}} />
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
