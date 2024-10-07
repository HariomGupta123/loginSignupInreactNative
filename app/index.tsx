import MyBotton from "@/components/MyBotton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router=useRouter()
  const contineu=()=>{
    router.navigate('/login')
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyBotton title={"contineu"} onPress={contineu} />
    </View>
  );
}
