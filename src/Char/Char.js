import React from "react";
import "./Char.css";

const Char = (props) => {
  return (
    <p className="Char" onClick={props.click}>
      {props.character}
    </p>
  );
};

export default Char;