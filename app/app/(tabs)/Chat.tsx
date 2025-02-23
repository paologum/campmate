import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { View, Text, XStack, Image } from "tamagui";

export default function Chat() {
  const defaultUserProPic =
    "http://localhost:3001/public/user-images/cartoon_headshot.png";
  const randomProfilePic = require("../../assets/images/icon.png");
  const users = [
    {
      name: "John Doe",
      lastMessage: "Hello",
      location: "1 km away",
      profilePic: defaultUserProPic,
    },
    {
      name: "Jane Doe",
      lastMessage: "Hi",
      location: "2 km away",
      profilePic: defaultUserProPic,
    },
  ];
  const [userImages, setUserImages] = useState<{ [str: string]: string }>({});
  useEffect(() => {
    const loadImages = async () => {
      const imageMap: { [str: string]: string } = {};
      for (const user of users) {
        try {
          const response = await fetch(user.profilePic);
          console.log(JSON.stringify(response, null, 2));
          if (response.ok) {
            imageMap[user.name] = user.profilePic;
          }
        } catch (error) {
          console.error(error);
        }
      }
      setUserImages(imageMap);
    };

    loadImages();
  }, []);
  return (
    <SafeAreaView>
      <View display="flex" alignItems="center" justifyContent="center">
        <Text fontWeight="800" textAlign="center" fontSize="30">
          Chat
        </Text>
        <View width="100%">
          <XStack
            height={100}
            width="100%"
            padding={10}
            justifyContent="flex-start"
            alignItems="center"
            gap={30}
          >
            <Text paddingLeft="70" fontSize="12" textAlign="center">
              Name
            </Text>
            <Text flex={1} fontSize="12" textAlign="right">
              Last Message
            </Text>
            <Text fontSize="12">Location</Text>
          </XStack>
        </View>
        {users.map((user) => {
          return (
            <View key={user.name} width="100%">
              <XStack
                height={100}
                width="100%"
                padding={10}
                justifyContent="flex-start"
                alignItems="center"
                gap={30}
              >
                <XStack display="flex" alignItems="center" gap={10}>
                  <Image
                    source={
                      userImages[user.name]
                        ? { uri: userImages[user.name] }
                        : randomProfilePic
                    }
                    width={50}
                    height={50}
                    borderRadius={50}
                  />
                  <Text fontSize="12" textAlign="center">
                    {user.name}
                  </Text>
                </XStack>
                <Text flex={1} textAlign="left" fontSize="12">
                  {user.lastMessage}
                </Text>
                <Text>{user.location}</Text>
              </XStack>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
