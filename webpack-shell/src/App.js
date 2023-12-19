import React, { lazy, Suspense } from "react";

const Button = lazy(() => import("MicroFrontend/Button"));

function App() {
  return (
    <div>
      <h1>App Shell</h1>
      <Button buttonName={"click here"} />
    </div>
  );
}

export default App;
