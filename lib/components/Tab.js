"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const ExpoVectorIcons_1 = __importDefault(require("./ExpoVectorIcons"));
const AnimatedPressable = react_native_reanimated_1.default.createAnimatedComponent(react_native_1.Pressable);
const _layout = react_native_reanimated_1.LinearTransition.springify();
function Tab({ tab, color, isActive, layoutAnimation = _layout, tintColor = "#000", tabStyle, textProps, expoVectorIconProps, showCloseIcon, showTexts, customCloseIcon, textAnimation, onPress, accessibilityLabel: customAccessibilityLabel, accessibilityHint: customAccessibilityHint, disabled = false, }) {
    const isDisabled = disabled || tab.disabled;
    const finalAccessibilityLabel = customAccessibilityLabel ||
        tab.accessibilityLabel ||
        `${tab.name || 'Tab'} ${isActive ? 'selected' : 'unselected'}`;
    const finalAccessibilityHint = customAccessibilityHint ||
        tab.accessibilityHint ||
        `Tap to ${isActive ? 'deselect' : 'select'} ${tab.name || 'this tab'}`;
    return (<AnimatedPressable style={[
            styles.tabContainer,
            { backgroundColor: color },
            tabStyle,
            isDisabled && styles.disabledTab
        ]} key={`${tab.name}-${tab.icon}`} onPress={() => !isDisabled && onPress(tab)} layout={layoutAnimation} 
    // Accessibility props
    accessible={true} accessibilityRole="button" accessibilityLabel={finalAccessibilityLabel} accessibilityHint={finalAccessibilityHint} accessibilityState={{
            selected: isActive,
            disabled: isDisabled
        }}>
      {tab.customIcon ? (tab.customIcon) : tab.icon ? (expoVectorIconProps ? (<ExpoVectorIcons_1.default {...expoVectorIconProps}/>) : (<ExpoVectorIcons_1.default family={"MaterialCommunityIcons"} name={tab.icon} size={24} color={tintColor}/>)) : null}
      {showTexts || isActive ? (<react_native_reanimated_1.default.Text entering={textAnimation?.entering
                ? textAnimation.entering
                : react_native_reanimated_1.FadeInLeft.springify()} exiting={textAnimation?.exiting
                ? textAnimation.exiting
                : react_native_reanimated_1.FadeOutLeft.springify()} layout={layoutAnimation} style={[styles.text, { color: tintColor }]} {...textProps}>
          {tab.name}
        </react_native_reanimated_1.default.Text>) : null}
      {showCloseIcon && isActive ? (<react_native_reanimated_1.default.View>
          {customCloseIcon ? (customCloseIcon) : expoVectorIconProps ? (<ExpoVectorIcons_1.default {...expoVectorIconProps}/>) : (<ExpoVectorIcons_1.default family={"MaterialCommunityIcons"} name={"close"} size={20} color={tintColor}/>)}
        </react_native_reanimated_1.default.View>) : null}
    </AnimatedPressable>);
}
const styles = react_native_1.StyleSheet.create({
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
exports.default = react_1.default.memo(Tab);
