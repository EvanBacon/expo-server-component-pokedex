import * as AppleColors from "@bacons/apple-colors";
import { Ionicons } from "@expo/vector-icons";

import { Link, Stack } from "expo-router";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider
      value={useColorScheme() === "light" ? DefaultTheme : DarkTheme}
    >
      <Stack
        // @ts-expect-error
        screenOptions={{
          ...(process.env.EXPO_OS === "ios"
            ? {
                headerTransparent: true,
                headerLargeTitle: true,
                headerBlurEffect: "regular",
                // headerShadowVisible: true,
                // headerLargeTitleShadowVisible: false,
                // headerStyle: {
                //   // Hack to ensure the collapsed small header shows the shadow / border.
                //   backgroundColor: "rgba(255,255,255,0.01)",
                // },

                // headerLargeStyle: {
                //   backgroundColor: AppleColors.systemGroupedBackground,
                // },
              }
            : {}),
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
    </ThemeProvider>
  );
}
