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
import logoiconblue from "../../assets/images/logoiconblue.png";
import Createvisitors from "../../assets/svg/multiplycircle";
import { useNavigation } from "@react-navigation/native";

export default function Notification() {

    const notifications = [
        {
        gaurdmessage:"Security Guard can i Receive Parcel to John Block A - A12.",
        userreply:"Leave at the gate",
        image:require("../../assets/images/notidp.png")
    },
        {
            gaurdmessage:"Security Guard can i Receive Parcel to John Block A - A12.",
           userreply:"Leave at the gate",
           image:require("../../assets/images/notidp.png")
        },
        {
            gaurdmessage: "Security Guard: Visitor for Sarah at Block B - B5.",
            userreply: "Please send them up.",
            image: require("../../assets/images/notidp.png"),
          },
          {
            gaurdmessage: "Security Guard: Guest for Mr. David at Block G - G8.",
            userreply: "Reject the delivery.",
            image: require("../../assets/images/notidp.png"),
          },
    
    ]

    const navigate = useNavigation()

  return (
    <>
    <SafeAreaView className="flex-1">
    {/* <ScrollView> */}


     <FlatList
                  data={notifications}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                      return (
                          <TouchableOpacity >
                        <View className="bg-white border-b-[1px] border-gray-300 w-full">
                          <View className="flex-row items-start p-5">
                            <Image
                              source={item.image}
                              className="w-12 h-12 rounded-full"
                              />
                            <View className="pl-3 w-[80%]">
                              <Text className="font-bold">{item.gaurdmessage}</Text>
                              <Text className="opacity-60 font-medium">
                                {item.userreply}
                              </Text>
                              <Text className="opacity-60 font-medium">
                                {item.address}
                              </Text>
                            </View>
                            <View>
                                <Text className="text-[#475569]">2m</Text>
                            </View>
                          </View>
                         
                        </View>
                      </TouchableOpacity>
                    );
                }}
                />
                {/* </ScrollView> */}
                </SafeAreaView>
    
    </>
  )
}