/// <reference types="react/canary" />

import React from "react";

import Skeleton from "@/components/skeleton";
import { ScrollView, View } from "react-native";
import IndexScreen from "@/routes/index";

export default function IndexRoute() {
  return (
    <React.Suspense fallback={<Loading />}>{IndexScreen()}</React.Suspense>
  );
}

function Loading() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustsScrollIndicatorInsets
    >
      <View style={{ padding: 16, gap: 8 }}>
        {new Array(10).fill(null).map((_, i) => (
          <Skeleton
            delay={30 * i}
            key={i}
            style={{ borderRadius: 10, height: 64 }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
