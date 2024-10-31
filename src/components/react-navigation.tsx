"use client";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

export function ScreenOptions(opts: NativeStackNavigationOptions) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(opts);
  }, []);
  return null;
}
