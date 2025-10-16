import TabType from "@/interfaces/Tab.interface";
import React, { useEffect, useState } from "react";
import {
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  TextProps,
  ViewProps,
  ViewStyle,
} from "react-native";
import Animated, {
  ComplexAnimationBuilder,
  LinearTransition,
} from "react-native-reanimated";
import Tab from "./Tab";

const _layout = LinearTransition.springify();

interface TabsProps {
  tabs: TabType[];
  containerStyle?: StyleProp<ViewStyle>;
  layoutAnimation?: ComplexAnimationBuilder;
  hideText?: boolean;
  scrollable?: boolean;
  inactiveColor?: string;
  activeColor?: string;
  tintColor?: string;
  scrollProps?: ScrollViewProps;
  viewProps?: ViewProps;
  textProps?: TextProps;
  onActiveChange?: (tab: TabType) => void;
}

export default function Tabs({
  tabs,
  inactiveColor = "grey",
  activeColor = "white",
  layoutAnimation = _layout,
  scrollable = true,
  tintColor = "black",
  scrollProps,
  viewProps,
  textProps,
  onActiveChange,
}: TabsProps): React.JSX.Element {
  const [active, setActive] = useState(tabs[0]);

  const ParentComponent = scrollable ? Animated.ScrollView : Animated.View;

  useEffect(() => {
    onActiveChange?.(active);
  }, [active]);

  return (
    <ParentComponent
      layout={layoutAnimation}
      {...(scrollable
        ? { ...defaultScrollProps, ...scrollProps }
        : { ...defaultViewProps, ...viewProps })}
    >
      {tabs.map((tab, index) => {
        const isActive = active.id === tab.id;
        const color = tab.color
          ? tab.color
          : isActive
          ? activeColor
          : inactiveColor;
        return (
          <Tab
            key={index}
            tab={tab}
            isActive={isActive}
            color={color}
            tintColor={tintColor}
            layoutAnimation={layoutAnimation}
            textProps={textProps}
            onPress={setActive}
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
  },
});

const defaultScrollProps = {
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: styles.container,
};

const defaultViewProps = {
  style: styles.container,
};
