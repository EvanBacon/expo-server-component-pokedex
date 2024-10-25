"use server";
import InfoPage from "@/components/info-page";

import { ScreenOptions } from "@/components/react-navigation";

async function InfoRoute() {
  return (
    <>
      <ScreenOptions title={"Info"} />
      <InfoPage
        dom={{
          contentInsetAdjustmentBehavior: "automatic",
          contentContainerStyle: {
            paddingHorizontal: 16,
            gap: 8,
          },
          automaticallyAdjustsScrollIndicatorInsets: true,
        }}
      />
    </>
  );
}

export { InfoRoute as default };
