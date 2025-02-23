import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button, Image } from "tamagui";
import { PRIMARY_COLOR } from "../_layout";
import { Image as nativeImage } from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  const tentImages = [
    require("../../assets/images/tent-blue.png"),
    require("../../assets/images/tent-green.png"),
    require("../../assets/images/tent-red.png"),
    require("../../assets/images/tent-yellow.jpeg"),
  ];
  const scaledTentImages = tentImages.map((image) => {
    const { width, height } = nativeImage.resolveAssetSource(image);
    return {
      source: image,
      width: width / 10,
      height: height / 10,
    };
  });
  const generateRandomPosition = (tent: any) => ({
    left: Math.random() * (width - tent.width), // Ensures tent stays within screen
    top: Math.random() * (height - tent.height), // Keeps tents inside garden area
  });
  const generateTents = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const tent =
        scaledTentImages[Math.floor(Math.random() * tentImages.length)]; // Pick random tent color
      if (!tent?.source) throw new Error("Tent source not found");
      return {
        source: tent.source,
        position: generateRandomPosition(tent),
      };
    });
  };
  const [tents, setTents] = useState(generateTents());

  return (
    <>
      <View position="relative">
        <ImageBackground
          style={{
            width,
            height,
            zIndex: -10,
            position: "absolute",
            top: 0,
          }}
          source={require("../../assets/images/garden.jpg")}
        />
        <View position="absolute" top={0} left={0} width="100%" height="100%">
          {tents.map(({ source, position }, index) => (
            <Image
              key={index}
              source={source}
              resizeMethod="resize"
              resizeMode="contain"
              width="20"
              height="20"
              transform={[{ scale: 0.5 }]}
              position="absolute"
              style={position}
            />
          ))}
        </View>
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
          <Text
            color="white"
            onPress={() => {
              setTents(generateTents());
            }}
          >
            Start Chat
          </Text>
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
