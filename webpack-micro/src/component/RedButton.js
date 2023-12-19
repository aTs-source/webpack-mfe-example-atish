import React from "react";

function RedButton({ buttonName }) {
  return (
    <button
      style={{ backgroundColor: "red" }}
      onClick={() => alert(`Hello this ${buttonName} is triggered from MFE`)}
    >
      {buttonName}
    </button>
  );
}

export default RedButton;
