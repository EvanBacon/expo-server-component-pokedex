import InfoPage from "@/components/info-page";

import { Stack } from "expo-router";

export default function InfoRoute() {
  return (
    <>
      <Stack.Screen options={{ title: "Info" }} />
      <InfoPage
        dom={{
          contentInsetAdjustmentBehavior: "automatic",
          automaticallyAdjustsScrollIndicatorInsets: true,
        }}
      />
    </>
  );
}
