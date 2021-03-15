import React from "react";

const Validation = (props) => {
  const isInputSizeValid = props.inputSize >= 5 ? true : false;

  return <p>{isInputSizeValid ? "Text long enough" : "Text too short"}</p>;
};

export default Validation;
