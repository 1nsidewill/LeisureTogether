import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Voice Chat Room</Text>
      </View>
      <View style={styles.userList}>
        <Text>User 1</Text>
        <Text>User 2</Text>
        <Text>User 3</Text>
        {/* List more users dynamically here */}
      </View>
      <HelloWave />
      <View style={styles.controls}>
        <Button title="Mute" onPress={() => console.log("Mute/Unmute")} />
        <Button title="Leave" onPress={() => console.log("Leave Chat")} />
        {/* Additional control buttons can be added here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 10,
    backgroundColor: "#6200ee",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  userList: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
