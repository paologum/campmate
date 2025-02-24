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
import { useState } from "react";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text color="black" fontWeight="700" textAlign="center" fontSize={30}>
          Login
        </Text>
        <Form display="flex" paddingTop="80" height="100%" onSubmit={() => {}}>
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
                value={email}
                onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
              />
            </XStack>
            <XStack padding={20} alignSelf="center">
              <Form.Trigger asChild>
                <Button
                  width="100%"
                  disabled={!email || !password}
                  backgroundColor={
                    !email || !password ? "darkgray" : PRIMARY_COLOR
                  }
                >
                  <Text color="white">Login</Text>
                </Button>
              </Form.Trigger>
            </XStack>
          </YStack>
        </Form>
      </View>
    </SafeAreaView>
  );
}
