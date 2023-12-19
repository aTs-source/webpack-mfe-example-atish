import React, { lazy, Suspense } from "react";

const Button = lazy(() => import("MicroFrontend/Button"));
const RedButton = lazy(() => import("MicroFrontend/RedButton"));

function App() {
  return (
    <div>
      <h1>App Shell</h1>
      <Button buttonName={"Normal Button"} />
      <RedButton buttonName={"Red Button"} />
    </div>
  );
}

export default App;
