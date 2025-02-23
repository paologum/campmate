import { useEffect, useState } from "react";
import {
  Chat as ChatMessage,
  MessageType,
} from "@flyerhq/react-native-chat-ui";
import { StyleSheet, SafeAreaView } from "react-native";
import { View, Text, XStack, Image, YStack, Sheet, Separator } from "tamagui";

type User = {
  id: string;
  name: string;
  lastMessage: string;
  location: string;
  profilePic: string;
};
// change this
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "x" ? r : (r % 4) + 8;
    return v.toString(16);
  });
};
export default function Chat() {
  const defaultUserProPic =
    "http://localhost:3001/public/user-images/cartoon_headshot.png";
  const randomProfilePic = require("../../assets/images/icon.png");
  const users: User[] = [
    {
      id: uuidv4(),
      name: "John Doe",
      lastMessage: "Hello",
      location: "1 km away",
      profilePic: defaultUserProPic,
    },
    {
      id: uuidv4(),
      name: "Jane Doe",
      lastMessage: "Hi",
      location: "2 km away",
      profilePic: defaultUserProPic,
    },
  ];
  const [userImages, setUserImages] = useState<{ [str: string]: string }>({});
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const loadImages = async () => {
      const imageMap: { [str: string]: string } = {};
      for (const user of users) {
        try {
          const response = await fetch(user.profilePic);
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
            <Text flex={1} fontSize="12" textAlign="left" padding={10}>
              Last Message
            </Text>
            <Text fontSize="12">Location</Text>
          </XStack>
        </View>
        <YStack width="100%">
          {users.map((user) => {
            return (
              <View
                key={user.id}
                width="100%"
                onPress={() => setSelectedUser(user)}
              >
                <XStack
                  height={50}
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
                  <Text fontSize="12">{user.location}</Text>
                </XStack>
              </View>
            );
          })}
        </YStack>
      </View>
      <Sheet
        modal={true}
        open={!!selectedUser}
        onOpenChange={(e: boolean) => {
          if (!e) {
            setSelectedUser(undefined);
          }
        }}
        snapPoints={[80, 90]}
        snapPointsMode={"percent"}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          backgroundColor="$shadow6"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Sheet.Handle />
        <Sheet.Frame
          padding="$4"
          justifyContent="flex-start"
          alignItems="center"
          gap="$5"
          display="flex"
        >
          <XStack display="flex" gap={20} alignItems="center">
            <Separator width="50%" marginVertical="$4" />
            <Text fontWeight="500" textAlign="center" fontSize="20">
              Today
            </Text>
            <Separator width="50%" marginVertical="$4" />
          </XStack>
          {selectedUser ? (
            <ChatBox sender={selectedUser!} receiver={users[1]!} />
          ) : (
            <EmptyChat />
          )}
        </Sheet.Frame>
      </Sheet>
    </SafeAreaView>
  );
}

const EmptyChat: React.FC = () => (
  <>
    <Text fontSize="20" fontWeight="800">
      Chat
    </Text>
    <Text fontSize="12" textAlign="center">
      This is a chat window
    </Text>
  </>
);

type ChatBoxProps = {
  sender: User;
  receiver: User;
};
const ChatBox: React.FC<ChatBoxProps> = ({ sender, receiver }) => {
  const [messages, setMessages] = useState<MessageType.Text[]>([
    {
      author: { id: receiver.id },
      createdAt: Date.now() - 1000 * 60 * 60,
      id: uuidv4(),
      type: "text",
      text: "Hello",
    },
  ]);
  const addMessage = (message: MessageType.Text) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };
  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: { id: sender.id },
      createdAt: Date.now(),
      id: uuidv4(),
      type: "text",
      text: message.text,
    };
    addMessage(textMessage);
  };
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View width="100%" height="100%">
        <ChatMessage
          messages={messages}
          onSendPress={handleSendPress}
          user={sender}
        />
      </View>
    </SafeAreaView>
  );
};
