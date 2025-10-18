import React from "react";
import { ScrollViewProps, StyleProp, ViewProps, ViewStyle } from "react-native";
import { ComplexAnimationBuilder } from "react-native-reanimated";
import TabType from "../interfaces/Tab.interface";
import { TabProps } from "./Tab";
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
export default function Tabs({ tabs, inactivesColor, activesColor, layoutAnimation, scrollable, containerStyle, scrollProps, viewProps, defaultActiveIndex, isMultiSelector, onActiveChange, ...tabProps }: TabsProps & Partial<TabProps>): React.JSX.Element;
export {};
