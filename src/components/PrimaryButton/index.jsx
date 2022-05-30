import React from "react";
import "./primaryButton.scss";

const PrimaryButton = (props) => {
  const { title, action, ...other } = props;
  return (
    <main className="primary-button" onClick={action} {...other}>
      <p className="primary-button-title">{title}</p>
    </main>
  );
};

export default PrimaryButton;
