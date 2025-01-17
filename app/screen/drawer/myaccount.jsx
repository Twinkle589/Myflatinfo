import { StatusBar } from "expo-status-bar";
import {
    FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

export default function Myaccount() {

    return (
        <>

        <SafeAreaView>
            <ScrollView>
                <View>
                    <View className="bg-[#283E71] w-[85%] mx-auto p-3 rounded-md mb-4 flex-row">
                    <MaterialCommunityIcons name="door-sliding" size={24} color="white" />
                            <Text className="text-white font-bold text-lg">{" "}Gate Possession 02</Text>
                            
                    </View>

                   
                    <View className="flex flex-col gap-y-3 w-[85%] mx-auto">
              <View className="flex flex-col gap-y-1 ">
                <Text className="text-[#99A4B3] ">Email / Phone Number</Text>

                <TextInput
                placeholder="enter@gmail.com" placeholderTextColor="#99A4B3" className="border-2 border-[#99A4B3] w-full rounded-md p-3" />
                <Text className="text-[#99A4B3] ">You can’t edit or change your registered mail id.</Text>
              </View>

              <View className="flex flex-col gap-y-1 ">
                <Text className="text-[#99A4B3] ">Password</Text>

                <TextInput
                 placeholder="+91 78945 61230" placeholderTextColor="#99A4B3"  className="border-2 border-[#99A4B3] w-full rounded-lmd p-3" />
                <Text className="text-[#99A4B3] ">You can’t edit or change your registered phone number.</Text>
            </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

        </>
    )
}