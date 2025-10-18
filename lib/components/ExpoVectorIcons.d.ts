import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, TextStyle } from "react-native";
export type ExpoVectorIconsProps = {
    family: "MaterialIcons";
    name: React.ComponentProps<typeof MaterialIcons>["name"];
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
} | {
    family: "MaterialCommunityIcons";
    name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
} | {
    family: "FontAwesome";
    name: React.ComponentProps<typeof FontAwesome>["name"];
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
} | {
    family: "Ionicons";
    name: React.ComponentProps<typeof Ionicons>["name"];
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
};
export default function ExpoVectorIcon(props: ExpoVectorIconsProps): React.JSX.Element;
