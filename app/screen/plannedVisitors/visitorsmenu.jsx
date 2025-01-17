import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoiconblue from "../../../assets/images/logoiconblue.png";
import Createvisitors from "../../../assets/svg/multiplycircle";
import { useNavigation } from "@react-navigation/native";

export default function Visitorsmenu() {

    const navigate = useNavigation()

  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="flex-1 flex flex-col justify-center items-center gap-10">
          <TouchableOpacity className="border-2 border-[#64A935] w-[70%] p-3 rounded-md " onPress={()=>navigate.navigate("Plannedvisitorscheckin")}>
            <Text className="text-[#64A935] text-base text-center">
              Planned Visitor Check - IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="border-2 border-[#C27101] w-[70%] p-3 rounded-md " onPress={()=>navigate.navigate("Pendingreqlist")}>
            <Text className="text-[#C27101] text-base text-center">
            Pending Request from Owner
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="border-2 border-[#2C45AC] w-[70%] p-3 rounded-md " onPress={()=>navigate.navigate("checkoutlist")}>
            <Text className="text-[#2C45AC] text-base text-center">
            All Visitor Check - Out
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigate.navigate("completedvisitorslist")}>
            <Text className="text-[#283E71] font-bold text-base underline">
              View Completed Visitors of Today
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="self-end p-3" onPress={()=>navigate.navigate("createnewvisitor")}>
          <Createvisitors />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
