import React from "react";

import "../styles/unicorn.css";

import unicornHead from "../images/unicorn-head.png";
import unicornBody from "../images/unicorn-body.png";

const Unicorn = () => {
  return (
    <div className="unicorn">
      <img src={unicornHead} className="unicorn-head" />
      <img src={unicornBody} className="unicorn-body" />
    </div>
  );
};
export default Unicorn;
