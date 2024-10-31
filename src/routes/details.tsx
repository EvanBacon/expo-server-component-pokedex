"use server";

import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { ScreenOptions } from "@/components/react-navigation";
import { FormItem } from "@/components/form";
import { FormList } from "@/components/form-list";
import { FadeIn } from "@/components/fade-in";

const Colors = {
  systemBlue: "rgba(0, 122, 255, 1)",
  label: "rgba(0, 0, 0, 1)",
  secondaryLabel: "rgba(61.2, 61.2, 66, 0.6)",
};

export default async function DetailScreen({
  params,
}: {
  params: { id: string };
}) {
  if (!params?.id) {
    throw new Error("No id provided to details route");
  }

  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  ).then((res) => res.json());

  let name = data.forms[0].name;

  // upper first
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <ScreenOptions title={name} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        automaticallyAdjustsScrollIndicatorInsets
      >
        <FadeIn>
          <ScrollView horizontal pagingEnabled>
            {[
              data.sprites.front_default || data.sprites.front_shiny,
              data.sprites.back_default || data.sprites.back_shiny,
            ].map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={{ width: 360, height: 300 }}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
        </FadeIn>

        <FadeIn>
          <View style={{ gap: 8 }}>
            <SectionTitle>Types</SectionTitle>
            <FormList>
              {data.types.map((type, index) => (
                <React.Fragment key={String(index)}>
                  <FormItem href="#">
                    <Text
                      style={{
                        color: Colors.label,
                        fontSize: 18,
                        fontWeight: "600",
                      }}
                    >
                      {type.type.name}
                    </Text>
                  </FormItem>
                </React.Fragment>
              ))}
            </FormList>

            <SectionTitle>Moves</SectionTitle>

            <FormList>
              {data.moves.map((type, index) => (
                <React.Fragment key={String(index)}>
                  <FormItem href="#">
                    <Text
                      style={{
                        color: Colors.label,
                        fontSize: 18,
                        fontWeight: "600",
                      }}
                    >
                      {type.move.name}
                    </Text>
                  </FormItem>
                </React.Fragment>
              ))}
            </FormList>
          </View>
        </FadeIn>
      </ScrollView>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        textTransform: "uppercase",
        fontSize: 12,
        color: Colors.secondaryLabel,
        marginVertical: 4,
        marginHorizontal: 24,
      }}
    >
      {children}
    </Text>
  );
}
