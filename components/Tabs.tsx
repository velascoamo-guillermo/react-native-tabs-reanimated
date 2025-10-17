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
  inactivesColor?: string;
  activesColor?: string;
  tintColor?: string;
  scrollProps?: ScrollViewProps;
  viewProps?: ViewProps;
  textProps?: TextProps;
  defaultActiveIndex?: number;
  isMultiSelector?: boolean;
  showCloseIcon?: boolean;
  showTexts?: boolean;
  textAnimation?: {
    entering?: ComplexAnimationBuilder;
    exiting?: ComplexAnimationBuilder;
  };
  onActiveChange?: (actives: number[]) => void;
}

export default function Tabs({
  tabs,
  inactivesColor = "grey",
  activesColor = "white",
  layoutAnimation = _layout,
  scrollable = true,
  tintColor = "black",
  scrollProps,
  viewProps,
  textProps,
  defaultActiveIndex = 0,
  isMultiSelector = false,
  showCloseIcon,
  showTexts,
  textAnimation,
  onActiveChange,
}: TabsProps): React.JSX.Element {
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
            tab={tab}
            isActive={isActive}
            color={color}
            tintColor={tintColor}
            layoutAnimation={layoutAnimation}
            textProps={textProps}
            showCloseIcon={showCloseIcon}
            showTexts={showTexts}
            textAnimation={textAnimation}
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
