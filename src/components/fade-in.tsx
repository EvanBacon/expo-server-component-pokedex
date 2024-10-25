"use client";

import { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";

export function FadeIn({ children }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useMemo(() => {
    return Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
}
