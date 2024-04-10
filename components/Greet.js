import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Greet({ name }) {
  return (
    <View>
      <Text>Greet, {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
