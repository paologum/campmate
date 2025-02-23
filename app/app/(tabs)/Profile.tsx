import { context } from "@/state";
import { useContext, useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Path, Stop } from "react-native-svg";
import {
  Text,
  View,
  YStack,
  Image,
  XStack,
  Input,
  Label,
  Separator,
  Button,
} from "tamagui";
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
  const { width } = Dimensions.get("window");
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
      <SafeAreaView style={{ height: "100%", width: "100%", flex: 1 }}>
        <View display="flex" height="100%" width="100%" gap="50">
          <YStack
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="40"
          >
            <Text
              fontWeight="800"
              textAlign="center"
              fontSize="20"
              color="white"
            >
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
          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }} // ✅ Prevents content from being hidden
            showsVerticalScrollIndicator={false}
          >
            <YStack display="flex" gap="20" padding={20}>
              <YStack gap="10">
                <XStack justifyContent="space-between">
                  <Text fontSize="16" fontWeight="500">
                    Account Settings
                  </Text>
                  <Text fontSize="16" color="gray">
                    Edit
                  </Text>
                </XStack>
                <Separator />
                <XStack alignItems="center" gap={10} width="100%">
                  <Label width={100} htmlFor="name">
                    Name
                  </Label>
                  <Input value={state.user.name} width="100%" />
                </XStack>
                <XStack alignItems="center" gap={10} width="100%">
                  <Label width={100} htmlFor="phone">
                    Phone Number
                  </Label>
                  <Input
                    value={state.user.phoneNumber?.toString() || "None"}
                    color={state.user.phoneNumber ? "black" : "gray"}
                    width="100%"
                  />
                </XStack>
                <XStack alignItems="center" gap={10} width="100%">
                  <Label width={100} htmlFor="phone">
                    Date of Birth
                  </Label>
                  <Input value={state.user.name} width="100%" />
                </XStack>
                <XStack alignItems="center" gap={10} width="100%">
                  <Label width={100} htmlFor="phone">
                    Date of Birth
                  </Label>
                  <Input value={state.user.email} width="100%" />
                </XStack>
              </YStack>
              <YStack gap="10">
                <XStack justifyContent="flex-start">
                  <Text fontSize="16" fontWeight="500">
                    Bio
                  </Text>
                </XStack>
                <XStack alignItems="center" gap={10} width="100%">
                  <Input value={state.user.bio} width="100%" />
                </XStack>
              </YStack>
              <YStack gap="10">
                <XStack justifyContent="flex-start">
                  <Text fontSize="16" fontWeight="500">
                    Discovery Settings
                  </Text>
                </XStack>
                <XStack alignItems="center" gap={10} width="100%">
                  <Label width={100} htmlFor="language">
                    Language
                  </Label>
                  <Input value={state.user.preferredLanguage} width="100%" />
                </XStack>
              </YStack>
            </YStack>
            <Button
              backgroundColor="transparent"
              borderColor="black"
              margin="10"
            >
              Logout
            </Button>
            <Button
              backgroundColor="transparent"
              color="red"
              borderColor="red"
              margin="10"
            >
              Delete Account
            </Button>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
