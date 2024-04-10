import { StyleSheet, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Alert"
        onPress={() => Alert.alert("Message", "Invalid data!")}
      />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid data!", "Incorrect DOB!")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "Incorrect DOB!", [
            { text: "Cancel", onPress: () => console.log("Cancel pressed") },
            { text: "OK", onPress: () => console.log("OK pressed") },
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    backgroundColor: "",
  },
});
