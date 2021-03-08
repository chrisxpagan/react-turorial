import React from "react";
import "./UserOutput.css"

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p updateUsername={props.updateUsername}>Username is {props.username}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default UserOutput;
