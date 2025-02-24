import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View, XStack } from "tamagui";
import { StyleSheet } from "react-native";
import { Mail } from "@tamagui/lucide-icons";
import "expo-router/entry";
import { PRIMARY_COLOR } from "./_layout";
import { useRouter } from "expo-router";

export default function InitialScreen() {
  const router = useRouter();
  const login = async () => {};
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
      <View
        width="100%"
        maxWidth={300}
        marginTop={20}
        alignItems="center"
        gap="40"
      >
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
            <Text
              flex={1}
              textAlign="center"
              color="white"
              onPress={() => {
                router.push("/SignIn");
              }}
            >
              Login with Email
            </Text>
            <View />
          </XStack>
        </View>
        <Text>
          Don't have an account?{" "}
          <Text color={PRIMARY_COLOR} fontWeight="bold">
            Sign up
          </Text>
        </Text>
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
