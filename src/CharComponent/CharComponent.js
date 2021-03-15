import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  return (
    <p className="CharComponent" onClick={props.click}>
      {props.character}
    </p>
  );
};

export default CharComponent;
