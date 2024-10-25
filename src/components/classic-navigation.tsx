"use client";

// In App.js in a new project

import * as React from "react";
import { ScrollView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  createStaticNavigation,
  Link,
  useRoute,
} from "@react-navigation/native";
import { ScreenOptions } from "./react-navigation";

import { loadDetailScreen, loadInfoScreen, loadScreen } from "./server-fns";
import Skeleton, { SkeletonBox } from "./skeleton";
import { LoadableScreen } from "./loadable";

function Loading() {
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

function HomeScreen() {
  // TODO: Preloading
  //   const navigation = useNavigation();

  //   React.useEffect(() => {
  //     navigation.preload('detail', { id: 1 });
  //     navigation.preload('detail', { id: 2 });
  //   }, []);
  return (
    <>
      <ScreenOptions
        headerRight={(props) => {
          // const navigation = useNavigation();
          return (
            <Link screen="info">
              <Ionicons
                style={{ padding: 8 }}
                name="information-circle-outline"
                size={24}
                color={"rgba(0, 122, 255, 1)"}
              />
            </Link>
          );
        }}
      />
      <LoadableScreen loadAsync={loadScreen} fallback={<Loading />} />
    </>
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
        <View style={{ padding: 16, gap: 12, gap: 12 }}>
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

function DetailScreen() {
  const { params } = useRoute();
  //   return <DetailsLoading />;
  return (
    <LoadableScreen
      loadAsync={loadDetailScreen.bind(null, { params })}
      fallback={<DetailsLoading />}
    />
  );
}

function InfoScreen() {
  const { params } = useRoute();
  return (
    <LoadableScreen
      loadAsync={loadInfoScreen.bind(null, { params })}
      fallback={null}
    />
  );
}

import * as AppleColors from "@bacons/apple-colors";

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
    Home: HomeScreen,
    detail: DetailScreen,
    info: {
      screen: InfoScreen,
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
