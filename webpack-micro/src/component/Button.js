import React from "react";

function Button({ buttonName }) {
  return (
    <button
      style={{ backgroundColor: "green" }}
      onClick={() => alert(`Hello this ${buttonName} is triggered from MFE`)}
    >
      {buttonName}
    </button>
  );
}

export default Button;
