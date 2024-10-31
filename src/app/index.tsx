"use client";
/// <reference types="react/canary" />

import React, { useState } from "react";

import Skeleton from "@/components/skeleton";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { fetchPokemonAsync } from "@/routes/index";
import { FormList } from "@/components/form-list";

// https://pokeapi.co/api/v2/pokemon

export default function IndexRoute() {
  const [items, setItems] = useState<React.ReactElement[]>([]);
  const [next, setNext] = useState<string>();
  const [loading, setLoading] = useState(false);

  // Fetch function for Pokémon data
  const fetchPokemon = async () => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);

    try {
      const data = await fetchPokemonAsync({ next: next });

      setNext(data.next);
      setItems((prev) => [...prev, ...data.children]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Pokémon data on component mount and when offset changes
  React.useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustsScrollIndicatorInsets
      contentContainerStyle={{
        padding: 16,
        gap: 16,
      }}
      onScroll={({ nativeEvent }) => {
        const paddingToBottom = 20;
        const isCloseToBottom =
          nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
          nativeEvent.contentSize.height - paddingToBottom;

        if (isCloseToBottom) {
          fetchPokemon();
        }
      }}
      scrollEventThrottle={400}
    >
      <FormList>{items}</FormList>
      {loading && <ActivityIndicator />}
    </ScrollView>
  );
}

function Loading() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustsScrollIndicatorInsets
    >
      <View style={{ padding: 16, gap: 8 }}>
        {new Array(10).fill(null).map((_, i) => (
          <Skeleton
            delay={30 * i}
            key={i}
            style={{ borderRadius: 10, height: 64 }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
