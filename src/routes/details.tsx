"use server";

import { Image, ScrollView, Text, View } from "react-native";
import { ScreenOptions } from "@/components/react-navigation";
import { FormItem } from "@/components/form";
import { FormList } from "@/components/form-list";

const Colors = {
  systemBlue: "rgba(0, 122, 255, 1)",
  label: "rgba(0, 0, 0, 1)",
  secondaryLabel: "rgba(61.2, 61.2, 66, 0.6)",
};

import { FadeIn } from "../components/fade-in";

async function DetailScreen({ params }: { params: { id: string } }) {
  if (!params?.id) {
    throw new Error("No id provided to details route");
  }

  const mockData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  ).then((res) => res.json());

  let name = mockData.forms[0].name;

  // upper first
  name = name.charAt(0).toUpperCase() + name.slice(1);

  //   console.log('name', { id: params.id, name, image: mockData.sprites.front_default });

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
          <Image
            source={{ uri: mockData.sprites.front_default }}
            style={{ width: "100%", height: 300, resizeMode: "contain" }}
          />
        </FadeIn>

        <FadeIn>
          <View style={{ gap: 8 }}>
            <SectionTitle>Types</SectionTitle>
            <FormList>
              {mockData.types.map((type) => (
                <>
                  <FormItem>
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
                </>
              ))}
            </FormList>

            <SectionTitle>Moves</SectionTitle>

            <FormList>
              {mockData.moves.map((type) => (
                <>
                  <FormItem>
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
                </>
              ))}
            </FormList>
          </View>
        </FadeIn>
      </ScrollView>
    </>
  );
}

function SectionTitle({ children }) {
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

export { DetailScreen as default };
