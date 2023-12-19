import React, { lazy, Suspense } from "react";

const Button = lazy(() => import("MicroFrontend/Button"));

function App() {
  return (
    <div>
      App Shell
      <Button buttonName={"click here"} />
    </div>
  );
}

export default App;
