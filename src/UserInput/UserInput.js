import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input style={props.inputStyle} type="text" onChange={props.change} value={props.username}/>
    </div>
  );
};

export default UserInput;
