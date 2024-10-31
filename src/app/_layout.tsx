import * as AppleColors from "@bacons/apple-colors";
import { Ionicons } from "@expo/vector-icons";

import { Link, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerLargeTitle: true,
        headerBlurEffect: "prominent",
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerStyle: {
          // Hack to ensure the collapsed small header shows the shadow / border.
          backgroundColor: "rgba(255,255,255,0.01)",
        },
        // @ts-expect-error
        headerLargeStyle: {
          backgroundColor: AppleColors.systemGroupedBackground,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => {
            return (
              <Link href="/info">
                <Ionicons
                  style={{ padding: 8 }}
                  name="information-circle-outline"
                  size={24}
                  color={AppleColors.systemBlue}
                />
              </Link>
            );
          },
        }}
      />
      <Stack.Screen
        name="info"
        options={{ title: "Pokémon App", presentation: "modal" }}
      />
    </Stack>
  );
}
