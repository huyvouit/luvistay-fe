import React from "react";
import "./outlinedButton.scss";

const OutlinedButton = (props) => {
  const { title, action } = props;
  return (
    <main className="outlined-button">
      <p className="outlined-button-title" onClick={action}>
        {title}
      </p>
    </main>
  );
};

export default OutlinedButton;
