import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button, Image } from "tamagui";
import { PRIMARY_COLOR } from "../_layout";

const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  return (
    <>
      <View position="relative">
        <ImageBackground
          style={{
            width,
            height,
            zIndex: -1,
            position: "absolute",
            top: 0,
          }}
          source={require("../../assets/images/garden.jpg")}
        />
      </View>
      <SafeAreaView style={{ height: "100%" }}>
        <View
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={20}
          position="relative"
        >
          <Text color="white" fontSize={30} fontWeight={800}>
            Map
          </Text>
        </View>
        <Button
          position="absolute"
          bottom={100}
          left={40}
          width={140}
          backgroundColor={PRIMARY_COLOR}
        >
          <Text color="white">Remove</Text>
        </Button>
        <Button
          position="absolute"
          bottom={100}
          right={40}
          width={140}
          backgroundColor={PRIMARY_COLOR}
        >
          <Text color="white">Start Chat</Text>
        </Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
