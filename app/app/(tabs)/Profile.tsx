import { context } from "@/state";
import { useContext, useEffect } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Path, Stop } from "react-native-svg";
import { Text, View, YStack, Image } from "tamagui";
import { PRIMARY_COLOR } from "../_layout";

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
    <SafeAreaView>
      <YStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="40"
      >
        <Svg width={width} height="100%" viewBox={`0 170 ${width} 250`}>
          <Circle cy={250} cx={width / 2} r={500} fill={PRIMARY_COLOR} />
        </Svg>
        <Text fontWeight="800" textAlign="center" fontSize="20">
          Profile
        </Text>
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
        <Text>{`${state.user.name}, ${state.user.age}`}</Text>
        <Text>{state.user.email}</Text>
      </YStack>
    </SafeAreaView>
  );
}
