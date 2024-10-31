/// <reference types="react/canary" />

import React from "react";

import IndexScreen from "@/routes/index";
import IndexLoading from "@/routes/index+loading";

export default function IndexRoute() {
  return (
    <React.Suspense fallback={<IndexLoading />}>{IndexScreen()}</React.Suspense>
  );
}
