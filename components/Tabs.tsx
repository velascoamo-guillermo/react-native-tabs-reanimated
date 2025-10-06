import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  LinearTransition,
} from "react-native-reanimated";

type TabIconName = "account" | "cart" | "message-text" | "bullhorn" | "inbox";

type Tab = {
  id: number;
  name: string;
  icon: TabIconName;
  color: string;
};

const tabs: Tab[] = [
  {
    id: 1,
    name: "Primary",
    icon: "account",
    color: "lightblue",
  },
  {
    id: 2,
    name: "Transactions",
    icon: "cart",
    color: "lightgreen",
  },
  {
    id: 3,
    name: "News",
    icon: "message-text",
    color: "lightpink",
  },
  {
    id: 4,
    name: "Promotions",
    icon: "bullhorn",
    color: "lavender",
  },
  {
    id: 5,
    name: "All",
    icon: "inbox",
    color: "lightgrey",
  },
];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const _layout = LinearTransition.springify();

export default function Tabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <Animated.View style={styles.container} layout={_layout}>
      {tabs.map((tab, index) => (
        <AnimatedPressable
          style={[styles.tabContainer, { backgroundColor: tab.color }]}
          key={`${tab.name}-${tab.icon}`}
          onPress={() => setActive(tab)}
          layout={_layout}
        >
          <MaterialCommunityIcons size={24} name={tab.icon} />
          {active.id === tab.id ? (
            <Animated.Text
              entering={FadeInLeft.springify()}
              exiting={FadeOutLeft.springify()}
              layout={_layout}
              style={{ overflow: "hidden" }}
            >
              {tab.name}
            </Animated.Text>
          ) : null}
        </AnimatedPressable>
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    overflow: "hidden",
  },
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
});
