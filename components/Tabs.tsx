import TabType from "@/interfaces/Tab.interface";
import React, { useEffect, useState } from "react";
import {
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
  ...tabProps
}: TabsProps & Partial<TabProps>): React.JSX.Element {
  const [actives, setActives] = useState<number[]>([defaultActiveIndex]);

  const ParentComponent = scrollable ? Animated.ScrollView : Animated.View;

  useEffect(() => {
    onActiveChange?.(actives);
  }, [actives]);

  const onTabPress = ({ tab, index }: { tab: TabType; index: number }) => {
    setActives((prevActives) => {
      if (isMultiSelector) {
        if (prevActives.some((active) => active === index)) {
          return prevActives.filter((active) => active !== index);
        } else {
          return [...prevActives, index];
        }
      } else {
        return [index];
      }
    });
  };

  const checkIsActive = (index: number) => {
    return actives.some((active) => active === index);
  };

  const defaultScrollProps = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: [styles.container, containerStyle],
  };

  const defaultViewProps = {
    style: [styles.container, containerStyle],
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
