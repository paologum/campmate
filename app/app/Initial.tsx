import { ThemedView } from "@/components/ThemedView";
import { Button, Image, Text } from "tamagui";
import { StyleSheet } from "react-native";

export default function InitialScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("@/assets/images/initial-page.png")} />
      <Text
        fontFamily="Snippet"
        fontSize="28"
        whiteSpace="nowrap"
        numberOfLines={1}
      >
        Find your Campmate
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingLeft: 10,
    width: "100%",
    maxWidth: "100%",
  },
});
