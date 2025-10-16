import TabType from "@/interfaces/Tab.interface";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextProps,
  ViewStyle,
} from "react-native";
import Animated, {
  ComplexAnimationBuilder,
  FadeInLeft,
  FadeOutLeft,
} from "react-native-reanimated";
import ExpoVectorIcon, { ExpoVectorIconsProps } from "./ExpoVectorIcons";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface TabProps {
  tab: TabType;
  isActive: boolean;
  color: string;
  tintColor?: string;
  layoutAnimation?: ComplexAnimationBuilder;
  tabStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  expoVectorIconProps?: ExpoVectorIconsProps;
  onPress: (tab: TabType) => void;
}

function Tab({
  tab,
  color,
  isActive,
  layoutAnimation,
  tintColor,
  tabStyle,
  textProps,
  expoVectorIconProps,
  onPress,
}: TabProps) {
  return (
    <AnimatedPressable
      style={[styles.tabContainer, { backgroundColor: color }, tabStyle]}
      key={`${tab.name}-${tab.icon}`}
      onPress={() => onPress(tab)}
      layout={layoutAnimation}
    >
      {tab.customIcon ? (
        tab.customIcon
      ) : tab.icon ? (
        expoVectorIconProps ? (
          <ExpoVectorIcon {...expoVectorIconProps} />
        ) : (
          <ExpoVectorIcon
            family={"MaterialCommunityIcons"}
            name={
              tab.icon as React.ComponentProps<
                typeof import("@expo/vector-icons").MaterialCommunityIcons
              >["name"]
            }
            size={24}
            color={tintColor}
          />
        )
      ) : null}
      {isActive ? (
        <Animated.Text
          entering={FadeInLeft.springify()}
          exiting={FadeOutLeft.springify()}
          layout={layoutAnimation}
          style={[styles.text, { color: tintColor }]}
          {...textProps}
        >
          {tab.name}
        </Animated.Text>
      ) : null}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    overflow: "hidden",
    gap: 8,
  },
  text: {
    overflow: "hidden",
  },
});

export default React.memo(Tab);
