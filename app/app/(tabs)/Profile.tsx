import { context } from "@/state";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, YStack } from "tamagui";

export default function Profile() {
  const { state } = useContext(context);
  if (!state.user) {
    return (
      <SafeAreaView>
        <YStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Text>You are not logged in!</Text>
        </YStack>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <YStack>
        <Text>{state.user.name}</Text>
        <Text>{state.user.email}</Text>
      </YStack>
    </SafeAreaView>
  );
}
