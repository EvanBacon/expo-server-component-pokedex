"use server";
import { View, Text } from "react-native";

export async function renderProfile(username: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>Username: {username}</Text>
    </View>
  );
}
