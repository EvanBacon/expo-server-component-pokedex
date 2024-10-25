"use server";

import { Image, ScrollView, Text, View } from "react-native";
import { FormItem } from "@/components/form";
import { FormList } from "@/components/form-list";

const Colors = {
  systemBlue: "rgba(0, 122, 255, 1)",
  label: "rgba(0, 0, 0, 1)",
  secondaryLabel: "rgba(61.2, 61.2, 66, 0.6)",
};

const items = [
  {
    id: "1",
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: "2",
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: "3",
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: "4",
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: "5",
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: "6",
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: "7",
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },

  {
    id: "8",
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: "9",
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: "10",
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
];

async function IndexRoute() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustsScrollIndicatorInsets
      contentContainerStyle={{
        padding: 16,
        gap: 16,
      }}
    >
      <FormList>
        {items.map(({ id, name, image }) => (
          <>
            <FormItem
              screen="detail"
              params={{
                id: id,
              }}
            >
              <Image
                source={{ uri: image }}
                style={{ width: 60, height: 48 }}
                resizeMode="contain"
              />
              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    color: Colors.label,
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  {name}
                </Text>
              </View>
            </FormItem>
          </>
        ))}
      </FormList>
    </ScrollView>
  );
}

export { IndexRoute as default };