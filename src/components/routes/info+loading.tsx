"use client";

import Skeleton, { SkeletonBox } from "@/components/skeleton";
import * as React from "react";
import { ScrollView, View } from "react-native";

export default function Loading() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustsScrollIndicatorInsets
    >
      <View style={{ padding: 16, gap: 8 }}>
        <SkeletonBox width={100} height={50} />
        <Skeleton />
        <Skeleton />
      </View>
    </ScrollView>
  );
}
