import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ReactNode, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import {
  createTamagui,
  View,
  createTokens,
  TamaguiProvider,
  Text,
} from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { ArrowLeft } from "@tamagui/lucide-icons";

export const PRIMARY_COLOR = "#DAB0F4";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const config = createTamagui(defaultConfig);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Snippet: require("../assets/fonts/Snippet-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="SignIn"
            options={{
              headerBackButtonDisplayMode: "minimal",
              headerLeft(props) {
                return (
                  <ArrowLeft
                    size={35}
                    color={PRIMARY_COLOR}
                    onPress={() => {
                      router.back();
                    }}
                    {...props}
                  />
                );
              },
              headerBackground: () => (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                  }}
                />
              ),
              headerTitle: "",
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
