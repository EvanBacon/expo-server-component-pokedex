"use server";

import { Image, Text, View } from "react-native";
import { FormItem } from "@/components/form";
import { PAGES } from "./local-data";

import * as AppleColors from "@bacons/apple-colors";

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
                    color: AppleColors.label,
                    fontSize: 18,
                    fontWeight: "600",
                    textTransform: "capitalize",
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
