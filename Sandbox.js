import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";

export default function Sandbox() {
  return (
    <View>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <Pressable onPress={() => console.log("Image pressed")}>
        <Image style={styles.img} source={logoImg} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          leo vel lectus faucibus porttitor. Fusce ultricies consectetur magna
          nec bibendum. Etiam condimentum magna ut ante semper, sed porta quam
          cursus. In at lectus quis sapien rutrum consectetur sit amet at justo.
          In egestas feugiat orci ac elementum. Phasellus sed mattis nunc.
          Nullam at venenatis felis. Maecenas varius accumsan sapien, non
          imperdiet nibh consectetur et. Pellentesque id pellentesque est, ac
          euismod ante. Integer hendrerit enim ut libero rhoncus, vitae rhoncus
          elit dignissim. Nunc interdum urna neque. Morbi eget tempus erat. Duis
          sit amet pharetra arcu. Sed id tempor ipsum. Cras ac nulla a ipsum
          luctus mattis at vel risus. Fusce gravida, eros ac congue malesuada,
          urna risus elementum nunc, vel porta dui sem sit amet eros. Morbi
          interdum vehicula tellus id feugiat. Maecenas ultrices dapibus dolor
          vel efficitur. Cras rhoncus mi nec efficitur imperdiet.
        </Text>
      </Pressable>
      {/* You can create a custom button using Pressable */}
      <Pressable>
        <Text>Submit</Text>
      </Pressable>
      <View style={styles.container}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="large" color="midnightblue" />
      </View>

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

const styles = StyleSheet.create({});
