"use server";

import { Image, Text, View } from "react-native";
import { FormItem } from "@/components/form";
import { PAGES } from "./local-data";

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

export async function fetchPokemonAsync({ next }: { next?: string }) {
  const data = (await fetch(next ?? "https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  )) as {
    count: number;
    next: string;
    previous: string | null;
    results: { name: string; url: string }[];
  };

  return {
    next: data.next,
    children: (
      <>
        {data.results.map(({ name, url }) => {
          const id = url.split("/").slice(-2)[0];
          const img = PAGES[Number(id) - 1]?.image;
          return (
            // @ts-expect-error
            <FormItem href={"/detail/" + id} key={String(id)}>
              {img && (
                <Image
                  source={{ uri: img }}
                  style={{ width: 60, height: 48 }}
                  resizeMode="contain"
                />
              )}
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
          );
        })}
      </>
    ),
  };
}
