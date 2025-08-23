// ← Chapter screen (with verse list)
import { SafeAreaView } from "react-native";
import VerseList from "../../components/VerseList";

export default function ExploreScreen() {
  const verses = [
    "በኃጢአተኞች መካከል የማይቆም፣ በዓመፀኞችም መንገድ የማይሄድ ሰው ብፁዕ ነው።",
    "እርሱ ግን በእግዚአብሔር ሕግ ደስ ይለዋል፥ በሕጉም ቀኑንና ሌሊቱን ያሰባሰባል።",
    "እንደ ውኃ ምንጭ አጠገብ ተተክሎ ፍሬውን በጊዜው የሚሰጥ ዛፍ ይሆናል፤",
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VerseList verses={verses} />
    </SafeAreaView>
  );
}
