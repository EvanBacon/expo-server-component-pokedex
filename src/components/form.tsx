import { TouchableHighlight, View, ViewProps } from "react-native";

import React from "react";
import { Href, Link } from "expo-router";

import * as AppleColors from "@bacons/apple-colors";
const Colors = {
  systemGray4: { semantic: ["systemGray4"] }, // "rgba(209, 209, 214, 1)",
  // secondarySystemGroupedBackground:
  //   AppleColors.secondarySystemGroupedBackground, // "rgba(255, 255, 255, 1)",
  // separator: AppleColors.separator, // "rgba(61.2, 61.2, 66, 0.29)",
};

export function FormItem({
  children,
  href,
}: Pick<ViewProps, "children"> & { href: Href<any> }) {
  return (
    <Link asChild href={href}>
      <TouchableHighlight
        style={{ padding: 12, paddingLeft: 16 }}
        underlayColor={Colors.systemGray4}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {children}
        </View>
      </TouchableHighlight>
    </Link>
  );
}
