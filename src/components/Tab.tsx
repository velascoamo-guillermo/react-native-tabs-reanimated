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
  LinearTransition,
} from "react-native-reanimated";
import TabType from "../interfaces/Tab.interface";
import ExpoVectorIcon, { ExpoVectorIconsProps } from "./ExpoVectorIcons";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const _layout = LinearTransition.springify();

export interface TabProps {
  tab: TabType;
  isActive: boolean;
  color: string;
  tintColor?: string;
  layoutAnimation?: ComplexAnimationBuilder;
  textAnimation?: {
    entering?: ComplexAnimationBuilder;
    exiting?: ComplexAnimationBuilder;
  };
  tabStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  expoVectorIconProps?: ExpoVectorIconsProps;
  showCloseIcon?: boolean;
  showTexts?: boolean;
  customCloseIcon?: React.ReactNode;
  onPress: (tab: TabType) => void;
  // Accessibility props
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
}

function Tab({
  tab,
  color,
  isActive,
  layoutAnimation = _layout,
  tintColor = "#000",
  tabStyle,
  textProps,
  expoVectorIconProps,
  showCloseIcon,
  showTexts,
  customCloseIcon,
  textAnimation,
  onPress,
  accessibilityLabel: customAccessibilityLabel,
  accessibilityHint: customAccessibilityHint,
  disabled = false,
}: TabProps) {
  const isDisabled = disabled || tab.disabled;
  const finalAccessibilityLabel =
    customAccessibilityLabel ||
    tab.accessibilityLabel ||
    `${tab.name || "Tab"} ${isActive ? "selected" : "unselected"}`;
  const finalAccessibilityHint =
    customAccessibilityHint ||
    tab.accessibilityHint ||
    `Tap to ${isActive ? "deselect" : "select"} ${tab.name || "this tab"}`;

  return (
    <AnimatedPressable
      style={[
        styles.tabContainer,
        { backgroundColor: color },
        tabStyle,
        isDisabled && styles.disabledTab,
      ]}
      key={`${tab.name}-${tab.icon}`}
      onPress={() => !isDisabled && onPress(tab)}
      layout={layoutAnimation}
      // Accessibility props
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={finalAccessibilityLabel}
      accessibilityHint={finalAccessibilityHint}
      accessibilityState={{
        selected: isActive,
        disabled: isDisabled,
      }}
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
      {showTexts || isActive ? (
        <Animated.Text
          entering={
            textAnimation?.entering
              ? textAnimation.entering
              : FadeInLeft.springify()
          }
          exiting={
            textAnimation?.exiting
              ? textAnimation.exiting
              : FadeOutLeft.springify()
          }
          layout={layoutAnimation}
          style={[styles.text, { color: tintColor }]}
          {...textProps}
        >
          {tab.name}
        </Animated.Text>
      ) : null}
      {showCloseIcon && isActive ? (
        <Animated.View>
          {customCloseIcon ? (
            customCloseIcon
          ) : expoVectorIconProps ? (
            <ExpoVectorIcon {...expoVectorIconProps} />
          ) : (
            <ExpoVectorIcon
              family={"MaterialCommunityIcons"}
              name={"close"}
              size={20}
              color={tintColor}
            />
          )}
        </Animated.View>
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
  disabledTab: {
    opacity: 0.5,
  },
  text: {
    overflow: "hidden",
  },
});

export default React.memo(Tab);
