import InfoPage from "@/components/info-page";

import { Stack } from "expo-router";

export default function InfoRoute() {
  return (
    <>
      <Stack.Screen options={{ title: "Info" }} />
      <InfoPage
        dom={{
          contentInsetAdjustmentBehavior: "automatic",
          //   containerStyle: {
          //     paddingHorizontal: 16,
          //     gap: 8,
          //   },
          automaticallyAdjustsScrollIndicatorInsets: true,
        }}
      />
    </>
  );
}
