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
import loginbg from "../../assets/images/logoblue.png";
import { useNavigation } from "@react-navigation/native";

export default function Gate() {

    const navigate = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <View className="flex gap-20">
          <Image source={loginbg} className="h-16" resizeMode="contain" />

          <View className="">
            <Text className="text-[#223331] mb-7 text-3xl">Gate Possession</Text>

            <View className="flex flex-col gap-1">
              <View className="flex flex-col gap-y-4 text-[#99A4B3]">
                <Text className=" ">Gate</Text>

                <TextInput className="border-2 border-[#99A4B3] w-full rounded-lg p-3" />
              </View>
            </View>
          </View>

        </View>

        <TouchableOpacity className="bg-[#283E71] p-3 rounded-lg w-[70%] mt-44 mx-auto" onPress={()=> navigate.navigate("home")}>
          <Text className="text-center text-white font-bold text-lg">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
