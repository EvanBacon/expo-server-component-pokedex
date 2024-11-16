"use client";
/// <reference types="react/canary" />

import React, { useState } from "react";

import { ActivityIndicator, ScrollView } from "react-native";
import { fetchPokemonAsync } from "@/routes/index";
import { FormList } from "@/components/form-list";

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
      setItems((prev) => [
        ...prev,
        // @ts-expect-error
        ...data.children,
      ]);
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
      automaticallyAdjustContentInsets
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
