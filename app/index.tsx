import data from "@/__mocks__/tabs.mock";
import Tabs from "@/components/Tabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Tabs tabs={data} scrollable scrollProps={{ horizontal: true }} />
    </SafeAreaView>
  );
}
