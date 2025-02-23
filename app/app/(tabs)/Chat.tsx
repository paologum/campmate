import { StyleSheet, SafeAreaView } from "react-native";
import { View, Text } from "tamagui";

export default function Chat() {
  const users = [
    {
      name: "John Doe",
      lastMessage: "Hello",
      location: "1 km away",
    },
    {
      name: "Jane Doe",
      lastMessage: "Hi",
      location: "2 km away",
    },
  ];
  return (
    <SafeAreaView>
      <View
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={20}
      >
        <Text fontWeight="800" textAlign="center" fontSize="30">
          Chat
        </Text>
      </View>
    </SafeAreaView>
  );
}
