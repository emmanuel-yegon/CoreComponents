import { StyleSheet, Modal, Button, Text, View } from "react-native";
import React from "react";

export default function Modal() {
  return (
    <View style={styles.container}>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, padding: 60, backgroundColor: "lightblue" }}>
          <Text>Modal content</Text>
          <Text>Modal content</Text>
          <Text>Modal content</Text>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
