import {
  data,
  dataWithoutColors,
  dataWithoutIcons,
} from "@/__mocks__/tabs.mock";
import Tabs from "@/components/Tabs";
import { FadeInRight, FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Tabs
        tabs={data}
        scrollable
        scrollProps={{ horizontal: true }}
        isMultiSelector
        textAnimation={{ entering: FadeInUp.springify() }}
      />
      <Tabs
        tabs={data}
        scrollable
        defaultActiveIndex={3}
        scrollProps={{ horizontal: true }}
      />
      <Tabs
        tabs={dataWithoutColors}
        scrollable
        scrollProps={{ horizontal: true }}
        defaultActiveIndex={2}
        activesColor="lightblue"
        inactivesColor="lightgrey"
        showTexts
        showCloseIcon
      />
      <Tabs
        tabs={dataWithoutColors}
        scrollable
        scrollProps={{ horizontal: true }}
        defaultActiveIndex={2}
        activesColor="lightgreen"
        inactivesColor="lightgrey"
        isMultiSelector
        showTexts
        showCloseIcon
      />
      <Tabs
        tabs={dataWithoutIcons}
        scrollable
        scrollProps={{ horizontal: true }}
        isMultiSelector
        textAnimation={{ entering: FadeInRight.springify() }}
      />
      <Tabs
        tabs={dataWithoutIcons}
        scrollable={false}
        isMultiSelector
        scrollProps={{ horizontal: true }}
        showTexts
        showCloseIcon
      />
    </SafeAreaView>
  );
}
