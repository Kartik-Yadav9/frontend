import React, { lazy } from "react";
import LazyWrapper from "../components/LazyWrapper";

const LazyComponent = lazy(() => import("./LazyLoads"));

function ReactLazy() {
  return (
    <div>
      <p>ReactLazy</p>

      <LazyWrapper>
        <LazyComponent />
      </LazyWrapper>
    </div>
  );
}

export default ReactLazy;
