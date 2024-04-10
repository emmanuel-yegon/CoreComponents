import { StyleSheet, View, Text, Button, Alert } from "react-native";

import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance <Text>in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          Lightblue box
        </Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    backgroundColor: "plum",
  },
  darkMode: {
    backgroundColor: "black",
    color: "white",
  },
  darkModeText: { color: "white" },
  boldText: { fontWeight: "bold" },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
