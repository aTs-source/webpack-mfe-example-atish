import React from "react";
import Button from "./component/Button";
import RedButton from "./component/RedButton";

function App() {
  return (
    <div>
      <h1>App Micro Font-end</h1>
      <Button buttonName={"Green Button"} />
      <RedButton buttonName={"Red Button"} />
    </div>
  );
}

export default App;
