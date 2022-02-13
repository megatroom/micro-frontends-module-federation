import React, { Suspense } from "react";
import MyErrorBoundary from "./MyErrorBoundary";

const RemoteApp = React.lazy(() => import("mf_webpack_01/App"));

const App = () => {
  return (
    <div>
      <div style={{ border: "2px solid greenyellow", padding: "0 16px" }}>
        <h1>Host</h1>
      </div>
      <MyErrorBoundary>
        <Suspense fallback={"loading..."}>
          <RemoteApp />
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
};

export default App;
