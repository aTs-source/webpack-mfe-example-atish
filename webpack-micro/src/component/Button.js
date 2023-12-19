import React from "react";

function Button({ buttonName }) {
  return (
    <button onClick={() => alert("Hello this s triggered from MFE")}>
      {buttonName}
    </button>
  );
}

export default Button;
