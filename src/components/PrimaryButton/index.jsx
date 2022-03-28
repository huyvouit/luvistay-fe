import React from "react";
import "./primaryButton.scss";

const PrimaryButton = (props) => {
  const { title, action } = props;
  return (
    <main className="primary-button" onClick={action}>
      <p className="primary-button-title">{title}</p>
    </main>
  );
};

export default PrimaryButton;
