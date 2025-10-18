"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExpoVectorIcon;
const vector_icons_1 = require("@expo/vector-icons");
const react_1 = __importDefault(require("react"));
function ExpoVectorIcon(props) {
    const { family, name, size = 24, color = "black", style } = props;
    switch (family) {
        case "MaterialIcons":
            return (<vector_icons_1.MaterialIcons name={name} size={size} color={color} style={style}/>);
        case "MaterialCommunityIcons":
            return (<vector_icons_1.MaterialCommunityIcons name={name} size={size} color={color} style={style}/>);
        case "FontAwesome":
            return (<vector_icons_1.FontAwesome name={name} size={size} color={color} style={style}/>);
        case "Ionicons":
        default:
            return <vector_icons_1.Ionicons name={name} size={size} color={color} style={style}/>;
    }
}
