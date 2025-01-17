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
import loginbg from "../../assets/images/logowhite.png";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigate = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/loginbg.jpeg")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        resizeMode="cover"
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#283E71CC",
          }}
        />

        <View className="flex gap-20">
          {/* <View className=" w-28"> */}
            <Image source={loginbg} className="h-16" resizeMode="contain" />
          {/* </View> */}

          <View className="flex ">
            <Text className="text-white mb-5 font-bold text-2xl">Log in</Text>

            <View className="flex flex-col gap-1">
              <View className="flex flex-col gap-y-2 ">
                <Text className="text-white ">Email / Phone Number</Text>

                <TextInput className="border-2 border-white w-full rounded-lg p-3" />
              </View>

              <View className="flex flex-col gap-y-2 ">
                <Text className="text-white ">Password</Text>

                <TextInput className="border-2 border-white w-full rounded-lg p-3" />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity className="bg-white p-3 rounded-lg w-[70%] mt-44"   onPress={() => navigate.navigate("gate")}>
          <Text className="text-center font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="light" backgroundColor="#283E71CC" />

    </SafeAreaView>
  );
}
