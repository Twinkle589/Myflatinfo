import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";


export default function Plannedvisitorslist() {

  const navigate = useNavigation()

  const details = [
    {
      id: "1",
      name: "John Doe",
      phone: "1234567890",
      address: "Flat 101, Tower A",
      tower: "A",
      image: require("../../assets/images/plannedvisitorslist/dp1.png"), 
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "9876543210",
      address: "Flat 102, Tower B",
      tower: "B",
      image: require("../../assets/images/plannedvisitorslist/dp2.png"), 
    },
    {
        id: "2",
        name: "Jane Smith",
        phone: "9876543210",
        address: "Flat 102, Tower B",
        tower: "B",
        image: require("../../assets/images/plannedvisitorslist/dp2.png"), 
      },
      {
        id: "2",
        name: "Jane Smith",
        phone: "9876543210",
        address: "Flat 102, Tower B",
        tower: "B",
        image: require("../../assets/images/plannedvisitorslist/dp2.png"), 
      },
      {
        id: "2",
        name: "Jane Smith",
        phone: "9876543210",
        address: "Flat 102, Tower B",
        tower: "B",
        image: require("../../assets/images/plannedvisitorslist/dp2.png"), 
      },
      {
        id: "2",
        name: "Jane Smith",
        phone: "9876543210",
        address: "Flat 102, Tower B",
        tower: "B",
        image: require("../../assets/images/plannedvisitorslist/dp2.png"), 
      },
  ];

  const handleNavigate = (item) => {
    console.log("Navigating to:", item);

    navigate.navigate('Visitorsentrydetails',{item})


  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
        <View className='px-3'>
        <View className="mx-4">
            <View className="mb-10 flex-row bg-white justify-between border-2 border-[#99A4B3] w-full  rounded-lg p-3 ">
              <TextInput
                className="flex-1"
                placeholder="Search by code, owner name, flat and block no."
              />
              <Feather name="search" size={24} color="#28303F" />
            </View>
          </View>

          <Text className='font-extrabold text-lg my-3 text-[#283E71]'>All Flat Members</Text>


            <FlatList
              data={details}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => handleNavigate(item)}>
                    <View className="bg-white my-2">
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
