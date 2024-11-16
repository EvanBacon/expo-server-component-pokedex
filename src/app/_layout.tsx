import * as AppleColors from "@bacons/apple-colors";
import { Ionicons } from "@expo/vector-icons";

import { Link, Stack } from "expo-router";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { TouchableOpacity, useColorScheme } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider
      value={useColorScheme() === "light" ? DefaultTheme : DarkTheme}
    >
      <Stack
        screenOptions={{
          ...(process.env.EXPO_OS === "ios"
            ? {
                headerLargeTitle: true,
                headerTransparent: true,
                headerBlurEffect: "systemChromeMaterial",
                headerLargeTitleShadowVisible: false,
                headerShadowVisible: true,
                headerLargeStyle: {
                  // Make the large title transparent to match the background.
                  backgroundColor: "transparent",
                },
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
                <Link href="/info" asChild>
                  <TouchableOpacity hitSlop={24}>
                    <Ionicons
                      style={{ padding: 8, paddingRight: 0 }}
                      name="information-circle-outline"
                      size={24}
                      color={AppleColors.systemBlue}
                    />
                  </TouchableOpacity>
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
