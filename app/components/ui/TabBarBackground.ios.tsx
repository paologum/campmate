import { PRIMARY_COLOR } from "@/app/_layout";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      // tint="systemThinMaterial"
      intensity={5}
      // style={StyleSheet.absoluteFill}
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: PRIMARY_COLOR,
      }}
    />
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}
