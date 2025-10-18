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
exports.default = Tabs;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const Tab_1 = __importDefault(require("./Tab"));
const _layout = react_native_reanimated_1.LinearTransition.springify();
function Tabs({ tabs, inactivesColor = "grey", activesColor = "white", layoutAnimation = _layout, scrollable = true, containerStyle, scrollProps, viewProps, defaultActiveIndex = 0, isMultiSelector = false, onActiveChange, ...tabProps }) {
    const [actives, setActives] = (0, react_1.useState)([defaultActiveIndex]);
    const ParentComponent = scrollable ? react_native_reanimated_1.default.ScrollView : react_native_reanimated_1.default.View;
    (0, react_1.useEffect)(() => {
        onActiveChange?.(actives);
    }, [actives]);
    const onTabPress = ({ tab, index }) => {
        setActives((prevActives) => {
            if (isMultiSelector) {
                if (prevActives.some((active) => active === index)) {
                    return prevActives.filter((active) => active !== index);
                }
                else {
                    return [...prevActives, index];
                }
            }
            else {
                return [index];
            }
        });
    };
    const checkIsActive = (index) => {
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
    return (<ParentComponent layout={layoutAnimation} {...(scrollable
        ? { ...defaultScrollProps, ...scrollProps }
        : { ...defaultViewProps, ...viewProps })}>
      {tabs.map((tab, index) => {
            const isActive = checkIsActive(index);
            const color = tab.color
                ? tab.color
                : isActive
                    ? activesColor
                    : inactivesColor;
            return (<Tab_1.default key={index} {...tabProps} tab={tab} isActive={isActive} color={color} onPress={() => onTabPress({ tab, index })}/>);
        })}
    </ParentComponent>);
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
        padding: 24,
    },
});
