import { context } from "@/state";
import { useContext, useEffect } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Path, Stop } from "react-native-svg";
import { Text, View, YStack, Image, XStack } from "tamagui";
import { PRIMARY_COLOR } from "../_layout";
import { Pencil } from "@tamagui/lucide-icons";

export default function Profile() {
  const { state } = useContext(context);
  const randomProfilePic = require("../../assets/images/icon.png");
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
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View position="absolute" top={0} left={0} width="100%" height="100%">
        <Svg
          width={width}
          height="100%"
          viewBox={`0 230 ${width} 250`}
          style={{ zIndex: 0 }}
        >
          <Circle cy={250} cx={width / 2} r={570} fill={PRIMARY_COLOR} />
        </Svg>
      </View>
      <SafeAreaView style={{ height: "100%", width: "100%" }}>
        <YStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="40"
        >
          <Text fontWeight="800" textAlign="center" fontSize="20" color="white">
            Profile
          </Text>
          <View position="relative">
            <Image
              source={
                state.user.profilePic
                  ? { uri: state.user.profilePic }
                  : randomProfilePic
              }
              width={100}
              height={100}
              borderRadius={50}
            />
            <XStack
              position="absolute"
              right={0}
              bottom={0}
              width={30}
              height={30}
              backgroundColor="white"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              borderColor={"black"}
            >
              <Pencil size={20} color={PRIMARY_COLOR} />
            </XStack>
          </View>
          <Text
            color="white"
            fontSize="16"
          >{`${state.user.name}, ${state.user.age}`}</Text>
        </YStack>
      </SafeAreaView>
    </>
  );
}
