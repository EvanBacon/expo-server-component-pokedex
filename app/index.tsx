import { Button } from "@/components/buttons";

import { Image, Text, View } from "react-native";

import { execAsync } from "@expo/osascript";

export default async function Page() {
  // Pokemon API
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/1").then((res) =>
    res.json()
  );

  console.log("Data", data);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Image
          source={{
            uri: data.sprites.front_default,
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.subtitle}>{data.name}</Text>
        <Button
          onPress={async () => {
            "use server";

            // Run AppleScript for: control + cmd + c
            // await execAsync(
            //   'tell application "System Events" to keystroke "c" using {control down, command down}'
            // );
          }}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
};
