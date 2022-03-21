import React from "react";
import "./primaryButton.scss";

const PrimaryButton = (props) => {
  const { title, action } = props;
  return (
    <main className="primary-button">
      <p className="primary-button-title" onClick={action}>
        {title}
      </p>
    </main>
  );
};

export default PrimaryButton;
