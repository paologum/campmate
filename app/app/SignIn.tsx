import { SafeAreaView } from "react-native";
import {
  Button,
  Form,
  Input,
  Label,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { PRIMARY_COLOR } from "./_layout";
import { Lock, Mail, X } from "@tamagui/lucide-icons";

export default function SignInScreen() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text color="black" fontWeight="800" textAlign="center" fontSize={50}>
          Login
        </Text>
        <Form display="flex" paddingTop="80" height="100%">
          <YStack display="flex" alignItems="center" justifyContent="center">
            <XStack
              padding={20}
              alignItems="center"
              justifyContent="center"
              gap={20}
            >
              <Mail size={25} color={PRIMARY_COLOR} />
              <Input
                flex={1}
                placeholder="Email"
                keyboardType="email-address"
              />
            </XStack>
            <XStack
              padding={20}
              alignItems="center"
              justifyContent="center"
              gap={20}
            >
              <Lock size={25} color={PRIMARY_COLOR} />
              <Input
                flex={1}
                placeholder="Password"
                htmlFor="password"
                secureTextEntry
              />
            </XStack>
            <XStack padding={20} alignSelf="center">
              <Button width="100%" backgroundColor="darkgray">
                <Text color="white">Login</Text>
              </Button>
            </XStack>
          </YStack>
        </Form>
      </View>
    </SafeAreaView>
  );
}
