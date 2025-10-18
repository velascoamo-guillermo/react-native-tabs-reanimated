import React, { useEffect, useState } from "react";
import {
  AccessibilityInfo,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from "react-native";
import Animated, {
  ComplexAnimationBuilder,
  LinearTransition,
} from "react-native-reanimated";
import TabType from "../interfaces/Tab.interface";
import Tab, { TabProps } from "./Tab";

const _layout = LinearTransition.springify();

interface TabsProps {
  tabs: TabType[];
  containerStyle?: StyleProp<ViewStyle>;
  layoutAnimation?: ComplexAnimationBuilder;
  hideText?: boolean;
  scrollable?: boolean;
  inactivesColor?: string;
  activesColor?: string;
  scrollProps?: ScrollViewProps;
  viewProps?: ViewProps;
  defaultActiveIndex?: number;
  isMultiSelector?: boolean;
  onActiveChange?: (actives: number[]) => void;
  // Accessibility props
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export default function Tabs({
  tabs,
  inactivesColor = "grey",
  activesColor = "white",
  layoutAnimation = _layout,
  scrollable = true,
  containerStyle,
  scrollProps,
  viewProps,
  defaultActiveIndex = 0,
  isMultiSelector = false,
  onActiveChange,
  accessibilityLabel: customAccessibilityLabel,
  accessibilityHint: customAccessibilityHint,
  ...tabProps
}: TabsProps & Partial<TabProps>): React.JSX.Element {
  const [actives, setActives] = useState<number[]>([defaultActiveIndex]);

  const ParentComponent = scrollable ? Animated.ScrollView : Animated.View;

  useEffect(() => {
    onActiveChange?.(actives);
  }, [actives]);

  const onTabPress = ({ tab, index }: { tab: TabType; index: number }) => {
    setActives((prevActives) => {
      const wasActive = prevActives.some((active) => active === index);
      let newActives: number[];

      if (isMultiSelector) {
        if (wasActive) {
          newActives = prevActives.filter((active) => active !== index);
          // Announce deselection for multi-selector
          AccessibilityInfo.announceForAccessibility(
            `${tab.name} deselected. ${newActives.length} tabs selected.`
          );
        } else {
          newActives = [...prevActives, index];
          // Announce selection for multi-selector
          AccessibilityInfo.announceForAccessibility(
            `${tab.name} selected. ${newActives.length} tabs selected.`
          );
        }
      } else {
        newActives = [index];
        // Announce selection for single selector
        AccessibilityInfo.announceForAccessibility(`${tab.name} tab selected`);
      }

      return newActives;
    });
  };

  const checkIsActive = (index: number) => {
    return actives.some((active) => active === index);
  };

  const defaultAccessibilityLabel =
    customAccessibilityLabel ||
    `Tab bar with ${tabs.length} tabs. ${
      isMultiSelector ? "Multi" : "Single"
    } selection mode.`;

  const defaultAccessibilityHint =
    customAccessibilityHint ||
    `Navigate between tabs. ${
      isMultiSelector
        ? "Multiple tabs can be selected."
        : "Only one tab can be selected at a time."
    }`;

  const defaultScrollProps = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: [styles.container, containerStyle],
    // Accessibility props for ScrollView
    accessible: true,
    accessibilityRole: "tablist" as const,
    accessibilityLabel: defaultAccessibilityLabel,
    accessibilityHint: defaultAccessibilityHint,
  };

  const defaultViewProps = {
    style: [styles.container, containerStyle],
    // Accessibility props for View
    accessible: true,
    accessibilityRole: "tablist" as const,
    accessibilityLabel: defaultAccessibilityLabel,
    accessibilityHint: defaultAccessibilityHint,
  };

  return (
    <ParentComponent
      layout={layoutAnimation}
      {...(scrollable
        ? { ...defaultScrollProps, ...scrollProps }
        : { ...defaultViewProps, ...viewProps })}
    >
      {tabs.map((tab, index) => {
        const isActive = checkIsActive(index);
        const color = tab.color
          ? tab.color
          : isActive
          ? activesColor
          : inactivesColor;
        return (
          <Tab
            key={index}
            {...tabProps}
            tab={tab}
            isActive={isActive}
            color={color}
            onPress={() => onTabPress({ tab, index })}
          />
        );
      })}
    </ParentComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    padding: 24,
  },
});
