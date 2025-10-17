# 🎬 React Native Tabs Reanimated

[![npm version](https://img.shields.io/npm/v/react-native-tabs-reanimated.svg)](https://www.npmjs.com/package/react-native-tabs-reanimated)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**React Native Tabs Reanimated** is a highly customizable, animated tab component for React Native applications. Built with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) and TypeScript, it provides smooth transitions, multi-select capabilities, and a beautiful native feel.

🎥 [**Watch Demo**](https://drive.google.com/file/d/1S79DF-P03zac8ccNMgzi0Sgr8eixbhYn/view?usp=sharing)

---

## ✨ Features

- 🎨 **Highly Customizable** - Colors, styles, icons, and animations
- 🔄 **Smooth Animations** - Powered by React Native Reanimated
- 👆 **Multi-Select Support** - Allow single or multiple active tabs
- 📜 **Scrollable/Fixed Modes** - Horizontal scroll or wrap layout
- 🎭 **Custom Icons** - Use Expo Vector Icons or custom components
- 🎯 **TypeScript** - Full type safety included
- ⚡ **Performance Optimized** - Memoized components for efficiency
- 🧩 **Flexible API** - Extensive props for customization

---

## 📦 Installation

```bash
npm install react-native-tabs-reanimated react-native-reanimated react-native-gesture-handler
```

or with yarn:

```bash
yarn add react-native-tabs-reanimated react-native-reanimated react-native-gesture-handler
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react-native-reanimated react-native-gesture-handler @expo/vector-icons
```

> **Note:** If you're using Expo, these dependencies are usually pre-installed.

---

## 🚀 Quick Start

```tsx
import Tabs from "react-native-tabs-reanimated";

const tabs = [
  { id: 1, name: "Primary", icon: "email", color: "#b3c6ff" },
  { id: 2, name: "Social", icon: "account-group", color: "#b2f0e6" },
  { id: 3, name: "Promotions", icon: "tag", color: "#ffe0b2" },
];

export default function App() {
  return <Tabs tabs={tabs} scrollable defaultActiveIndex={0} />;
}
```

---

## 📖 Usage Examples

### Basic Single Selection

```tsx
import Tabs from "react-native-tabs-reanimated";

const tabs = [
  { id: 1, name: "Home", icon: "home", color: "#b3c6ff" },
  { id: 2, name: "Profile", icon: "account", color: "#b2f0e6" },
  { id: 3, name: "Settings", icon: "cog", color: "#ffe0b2" },
];

<Tabs
  tabs={tabs}
  defaultActiveIndex={0}
  onActiveChange={(actives) => console.log("Active tabs:", actives)}
/>;
```

### Multi-Select Mode

```tsx
<Tabs
  tabs={tabs}
  isMultiSelector
  defaultActiveIndex={0}
  onActiveChange={(actives) => console.log("Selected tabs:", actives)}
/>
```

### Custom Colors

```tsx
<Tabs
  tabs={tabs}
  activesColor="lightblue"
  inactivesColor="lightgrey"
  tintColor="#000"
/>
```

### Show Text Always & Close Icons

```tsx
<Tabs tabs={tabs} showTexts showCloseIcon activesColor="lightgreen" />
```

### Custom Animations

```tsx
import { FadeInUp, FadeOutDown } from "react-native-reanimated";

<Tabs
  tabs={tabs}
  textAnimation={{
    entering: FadeInUp.springify(),
    exiting: FadeOutDown.springify(),
  }}
/>;
```

### Non-Scrollable (Wrap Layout)

```tsx
<Tabs tabs={tabs} scrollable={false} isMultiSelector showTexts />
```

### Custom Tab Styles

```tsx
<Tabs
  tabs={tabs}
  tabStyle={{
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
  }}
  containerStyle={{
    padding: 16,
    backgroundColor: "#f5f5f5",
  }}
/>
```

---

## 🛠️ API Reference

### `Tabs` Component Props

| Prop                  | Type                          | Default                                          | Description                                   |
| --------------------- | ----------------------------- | ------------------------------------------------ | --------------------------------------------- |
| `tabs`                | `TabType[]`                   | **required**                                     | Array of tab objects                          |
| `defaultActiveIndex`  | `number`                      | `0`                                              | Initial active tab index                      |
| `isMultiSelector`     | `boolean`                     | `false`                                          | Enable multiple tab selection                 |
| `scrollable`          | `boolean`                     | `true`                                           | Enable horizontal scrolling                   |
| `showTexts`           | `boolean`                     | `false`                                          | Always show tab text (not just active)        |
| `showCloseIcon`       | `boolean`                     | `false`                                          | Show close icon on active tabs                |
| `activesColor`        | `string`                      | `'white'`                                        | Background color for active tabs              |
| `inactivesColor`      | `string`                      | `'grey'`                                         | Background color for inactive tabs            |
| `tintColor`           | `string`                      | `'#000'`                                         | Icon and text color                           |
| `containerStyle`      | `StyleProp<ViewStyle>`        | `undefined`                                      | Custom container styles                       |
| `tabStyle`            | `StyleProp<ViewStyle>`        | `undefined`                                      | Custom individual tab styles                  |
| `layoutAnimation`     | `ComplexAnimationBuilder`     | `LinearTransition.springify()`                   | Layout transition animation                   |
| `textAnimation`       | `{ entering?, exiting? }`     | `{ entering: FadeInLeft, exiting: FadeOutLeft }` | Text appearance animations                    |
| `onActiveChange`      | `(actives: number[]) => void` | `undefined`                                      | Callback when active tabs change              |
| `scrollProps`         | `ScrollViewProps`             | `undefined`                                      | Additional ScrollView props (when scrollable) |
| `viewProps`           | `ViewProps`                   | `undefined`                                      | Additional View props (when not scrollable)   |
| `textProps`           | `TextProps`                   | `undefined`                                      | Custom text props                             |
| `expoVectorIconProps` | `ExpoVectorIconsProps`        | `undefined`                                      | Custom icon props                             |
| `customCloseIcon`     | `React.ReactNode`             | `undefined`                                      | Custom close icon component                   |

### `TabType` Interface

```typescript
interface TabType {
  id: number;
  name: string;
  icon?: string; // Material Community Icons name
  color?: string; // Custom background color
  customIcon?: ReactNode; // Custom icon component
}
```

---

## 🎨 Customization

### Using Custom Icons

You can use custom React components as icons:

```tsx
import { View } from "react-native";

const tabs = [
  {
    id: 1,
    name: "Custom",
    customIcon: (
      <View style={{ width: 24, height: 24, backgroundColor: "red" }} />
    ),
    color: "#b3c6ff",
  },
];

<Tabs tabs={tabs} />;
```

### Advanced Styling

```tsx
<Tabs
  tabs={tabs}
  containerStyle={{
    padding: 24,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
  }}
  tabStyle={{
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
  textProps={{
    style: {
      fontWeight: "600",
      fontSize: 14,
    },
  }}
/>
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ using [Expo](https://expo.dev) and TypeScript
- Powered by [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

## 📱 Requirements

- React Native >= 0.70
- React >= 18.0
- React Native Reanimated >= 3.0
- React Native Gesture Handler >= 2.0
- Expo (optional but recommended)

---

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/velascoamo-guillermo/react-native-tabs-reanimated/issues) with a detailed description.

---

## 👨‍💻 Author

**Guillermo Velasco**

- GitHub: [@velascoamo-guillermo](https://github.com/velascoamo-guillermo)

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
