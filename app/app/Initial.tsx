import { ThemedView } from "@/components/ThemedView";
import { Button, Image } from "tamagui";
import { StyleSheet } from "react-native";

export default function InitialScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("@/assets/images/initial-page.png")} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 100,
  },
});
