import React, { Suspense } from "react";
import Loading from "../ui/Loading";

function LazyWrapper({ children }) {
  return (
  <Suspense fallback={<Loading />}>
    {children}
    </Suspense>
)}

export default LazyWrapper;
