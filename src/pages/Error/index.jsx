import React from "react";

import "./error.scss";

import Icons from "../../assets/icons";
const ErrorPage = () => {
  return (
    <main className="error-page">
      <Icons.PageNotFound width={"600px"} height={"500px"} />
      <p>
        Trang web này không tồn tại
      </p>
      <button style={{
        backgroundColor: "rgb(255, 0, 0, 255)",
        padding: "25px"
      } }>Quay trở về trang chủ</button>
    </main>
  );
};

export default ErrorPage;
