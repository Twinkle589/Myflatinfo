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
import Feather from "@expo/vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

export default function Pendingreqlist() {

    const navigate = useNavigation()

    const details = [
        {
          id: "1",
          name: "John Doe",
          phone: "1234567890",
          address: "Flat 101, Tower A",
          tower: "A",
          image: require("../../../assets/images/plannedvisitorslist/dp1.png"), 
        },
        {
          id: "2",
          name: "Jane Smith",
          phone: "9876543210",
          address: "Flat 102, Tower B",
          tower: "B",
          image: require("../../../assets/images/plannedvisitorslist/dp2.png"), 
        },
    ]

    const handleNavigate = (item) => {
        console.log("Navigating to:", item);
    
        navigate.navigate('pendingvisitorsdetails',{item})

      };

    return(
        <>
        <SafeAreaView>
            <ScrollView>
                <View className="w-[90%] mx-auto ">
                    

                <View className="">
            <View className="mb-10 flex-row justify-between bg-white border-2 border-[#99A4B3] w-full  rounded-lg p-3 ">
              <TextInput
                className="flex-1"
                placeholder="Search Owner name, flat and block number"
              />
              <Feather name="search" size={24} color="black" />
            </View>
          </View>
                </View>

                

            <FlatList
              data={details}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => handleNavigate(item)}>
                    <View className="bg-white my-2 w-[90%] mx-auto">
                      <View className="flex-row items-center p-5">
                        <Image
                          source={item.image}
                          className="w-12 h-12 rounded-full"
                        />
                        <View className="pl-3">
                          <Text className="font-bold">{item.name}</Text>
                          <Text className="opacity-60 font-medium">
                            {item.phone}
                          </Text>
                          <Text className="opacity-60 font-medium">
                            {item.address}
                          </Text>
                        </View>
                      </View>
                      <Text className="text-center bg-[#F3FBFE] p-2 w-full font-semibold">
                        Tower {item.tower}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            </ScrollView>
        </SafeAreaView>
        </>
    )
}