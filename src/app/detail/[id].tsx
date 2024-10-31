/// <reference types="react/canary" />

import { ScreenOptions } from "@/components/react-navigation";
import Skeleton, { SkeletonBox } from "@/components/skeleton";
import DetailsScreen from "@/routes/details";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";

export default function IndexRoute() {
  const params = useLocalSearchParams<{ id: string }>();
  const contents = useMemo(() => DetailsScreen({ params }), [params.id]);
  return (
    <React.Suspense fallback={<DetailsLoading />}>{contents}</React.Suspense>
  );
}

function DetailsLoading() {
  return (
    <>
      <ScreenOptions title="" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        automaticallyAdjustsScrollIndicatorInsets
      >
        <View style={{ padding: 16, gap: 12 }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 300,
              }}
            >
              <SkeletonBox width={200} height={200} />
            </View>
          </View>
          <Skeleton
            style={{
              height: 100,
              borderCurve: "continuous",
              borderRadius: 10,
            }}
          />
          <Skeleton
            delay={100}
            style={{
              marginTop: 64,
              height: 200,
              borderCurve: "continuous",
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
