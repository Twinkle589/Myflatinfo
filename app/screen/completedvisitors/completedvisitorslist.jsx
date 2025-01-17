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
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Completedvisitorslist() {

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
          in:"In 10.00am",
          out:"In 10.00am"
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
          in:"In 10.00am",
          out:"In 10.00am"
        },
    ]

    // const handleNavigate = (item) => {
    //     console.log("Navigating to:", item);
    
    //     navigate.navigate('checkoutvisitordetail',{item})

    //   };

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

                <Text className="text-[#283E71] text-lg font-bold w-[90%] mx-auto mt-3">Today Visitors</Text>

                

            <FlatList
              data={visitorsdetails}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity >
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
                          <Text className="text-[#565D6D]">{item.date}</Text>

                          <View className="flex-row justify-between gap-x-5">
                            <View className="flex-row ">
                            <MaterialIcons name="login" size={20} color="#64A935" />
                          <Text className="text-[#494646] font-medium">
                            {" "}{item.in}
                          </Text>
                            </View>

                            <View className="flex-row">
                            <MaterialIcons name="logout" size={20} color="#C30909" />
                          <Text className="text-[#494646] font-medium">
                          {" "}{item.out}
                          </Text>
                            </View>
                          </View>

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