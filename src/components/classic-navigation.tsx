"use client";

// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  createStaticNavigation,
  Link,
  useRoute,
} from "@react-navigation/native";
import * as AppleColors from "@bacons/apple-colors";

import IndexScreen from "@/components/routes/index";
import IndexLoading from "@/components/routes/index+loading";
import InfoScreen from "@/components/routes/info";
import InfoLoading from "@/components/routes/info+loading";
import DetailScreen from "@/components/routes/details";
import DetailsLoading from "@/components/routes/details+loading";

function createScreen({
  renderScreen,
  fallback,
}: {
  renderScreen: ({ params }: { params: any }) => React.ReactElement;
  fallback: React.ReactElement;
}) {
  return function Screen() {
    const route = useRoute();
    return (
      <React.Suspense fallback={fallback}>
        {renderScreen({ params: route.params ?? {} })}
      </React.Suspense>
    );
  };
}

const RootStack = createNativeStackNavigator({
  screenOptions: {
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
  },
  screens: {
    Home: {
      screen: createScreen({
        renderScreen: IndexScreen,
        fallback: React.createElement(IndexLoading),
      }),
      options: {
        headerRight: () => {
          // const navigation = useNavigation();
          return (
            <Link screen="info">
              <Ionicons
                style={{ padding: 8 }}
                name="information-circle-outline"
                size={24}
                color={AppleColors.systemBlue}
              />
            </Link>
          );
        },
      },
    },
    detail: {
      screen: createScreen({
        renderScreen: DetailScreen,
        fallback: <DetailsLoading />,
      }),
    },
    info: {
      screen: createScreen({
        renderScreen: InfoScreen,
        fallback: <InfoLoading />,
      }),
      options: {
        presentation: "modal",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
