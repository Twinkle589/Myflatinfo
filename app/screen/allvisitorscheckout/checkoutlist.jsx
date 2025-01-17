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
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function Checkoutlist() {

    const navigate = useNavigation()

    const visitorsdetails = [
        {
          id: "1", 
          name: "John Doe",
          address: "Flat 101, Tower A",
          status: "Out By 10.00pm (Over Stay)",
          date: "09 May-2024",
          phone:"9562254125",
          checkintime:"10.00 am  Check In",
          image: require("../../../assets/images/plannedvisitorslist/dp1.png"), 
        },
        {
          id: "2",
          name: "Jane Smith",
          status: "Out By 10.00pm (Over Stay)",
          date: "09 May-2024",
          checkintime:"10.00 am  Check In",
          phone:"9745213680",
          address: "Flat 102, Tower B",
          tower: "B",
          image: require("../../../assets/images/plannedvisitorslist/dp2.png"), 
        },
    ]

    const handleNavigate = (item) => {
        console.log("Navigating to:", item);
    
        navigate.navigate('checkoutvisitordetail',{item})

      };

    return(
        <>
        <SafeAreaView>
            <ScrollView>
                <View className="w-[90%] mx-auto ">
                    

                <View className="mb-3 flex-row bg-white justify-between border-2 border-[#99A4B3] w-full  rounded-lg p-3 ">
              <TextInput
                className="flex-1 "
                placeholder="Search Owner name, flat and block number"
              />
              <Feather name="search" size={24} color="black" />
            </View>
                </View>

                <View className="flex-row gap-x-2 justify-end w-[95%] ">
                <Ionicons name="filter" size={24} color="black" />
                  <Text className="text-lg">Filter</Text>
                </View>

            <FlatList
              data={visitorsdetails}
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
                        <View className="pl-3 flex-col gap-y-1">
                            <View className="flex-row">

                          <Text className="font-bold">{item.name} - </Text>
                          <Text className="opacity-60 font-medium">
                            {item.address}
                          </Text>

                            </View>
                            <View className="flex-row">
                          <Text className="text-[#565D6D]">{item.date} | </Text>
                          <Text className="text-[#64A935]">{item.checkintime}</Text>
                            </View>
                          <Text className="text-[#C42E2E] font-medium">
                            {item.status}
                          </Text>
                        </View>
                      </View>
                     
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