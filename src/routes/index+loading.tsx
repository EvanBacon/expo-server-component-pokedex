"use client";

import Skeleton from "@/components/skeleton";
import * as React from "react";
import { ScrollView, View } from "react-native";

export default function Loading() {
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
