"use client";

import React from "react";
import { Text } from "react-native";
import { renderProfile } from "./server-actions";

export function Button({ onPress }) {
  return (
    <>
      <Text
        onPress={() => {
          // alert("Button pressed");
          onPress();
        }}
      >
        Button
      </Text>

      <React.Suspense fallback={<Text>Loading...</Text>}>
        {renderProfile("bacon")}
      </React.Suspense>
    </>
  );
}
