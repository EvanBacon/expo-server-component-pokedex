/// <reference types="react/canary" />

import React, { useMemo } from "react";

import DetailsScreen from "@/routes/details";
import DetailsLoading from "@/routes/details+loading";
import { useLocalSearchParams } from "expo-router";

export default function IndexRoute() {
  const params = useLocalSearchParams<{ id: string }>();
  const contents = useMemo(() => DetailsScreen({ params }), [params.id]);
  return (
    <React.Suspense fallback={<DetailsLoading />}>{contents}</React.Suspense>
  );
}
