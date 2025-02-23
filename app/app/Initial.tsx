import { ThemedView } from "@/components/ThemedView";
import {
  Button,
  ButtonIcon,
  Image,
  Text,
  useTheme,
  useThemeName,
  View,
  XStack,
} from "tamagui";
import { StyleSheet } from "react-native";
import { Mail } from "@tamagui/lucide-icons";
import { PRIMARY_COLOR } from "./_layout";

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
      <View style={styles.buttons}>
        <XStack
          width="100%"
          backgroundColor={PRIMARY_COLOR}
          padding={10}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={"10%"}
        >
          <View backgroundColor="white" padding={7} borderRadius="50%">
            <Mail color={PRIMARY_COLOR} />
          </View>
          <Text flex={1} textAlign="center" color="white">
            Login with Email
          </Text>
          <View />
        </XStack>
      </View>
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
  buttons: {
    marginTop: 50,
    width: "100%",
    maxWidth: 300,
  },
});
