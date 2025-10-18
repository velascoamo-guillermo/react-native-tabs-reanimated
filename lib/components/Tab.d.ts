import React from "react";
import { StyleProp, TextProps, ViewStyle } from "react-native";
import { ComplexAnimationBuilder } from "react-native-reanimated";
import TabType from "../interfaces/Tab.interface";
import { ExpoVectorIconsProps } from "./ExpoVectorIcons";
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
    accessibilityLabel?: string;
    accessibilityHint?: string;
    disabled?: boolean;
}
declare function Tab({ tab, color, isActive, layoutAnimation, tintColor, tabStyle, textProps, expoVectorIconProps, showCloseIcon, showTexts, customCloseIcon, textAnimation, onPress, accessibilityLabel: customAccessibilityLabel, accessibilityHint: customAccessibilityHint, disabled, }: TabProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Tab>;
export default _default;
