import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./relation.scss";

const Relation = () => {
  return (
    <main className="relation-wrapper">
      <section className="relation-left">{/* <p>right</p> */}</section>
      <section className="relation-right">
        <section className="relation-right-content">
          <p className="text-next">
            Next
            <span>
              <FontAwesomeIcon icon="fa-solid fa-right-long" />
            </span>
          </p>

          <h2 className="text-room">Superior Double Room</h2>
        </section>
      </section>
    </main>
  );
};

export default Relation;
