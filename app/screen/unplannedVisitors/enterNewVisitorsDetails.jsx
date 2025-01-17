import { StatusBar } from "expo-status-bar";
import {
  Image,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import car from "../../../assets/images/unplannedVisitors/car.png"
import Feather from "@expo/vector-icons/Feather";
import bike from "../../../assets/images/unplannedVisitors/bike.png"
import { useNavigation } from "@react-navigation/native";

export default function Enternewvisitorsdetails({ route }) {
  const { item } = route.params;
  const { address, image, name, phone, tower } = item;
  const navigate = useNavigation()

  const handleNavigate = (item) => {
    console.log("Navigating to:", item);

    navigate.navigate('Newvisitorsentrydetails',{item})

  };
  return(
    <>
    <SafeAreaView>
        <ScrollView>
        <View className="my-2 text-white bg-[#283E71] rounded-xl w-[90%] mx-auto mb-6">
              <View className="flex-row items-center p-5">
                <Image source={image} className="w-12 h-12 rounded-full" />
                <View className="pl-3">
                  <Text className="font-semibold text-white">{name}</Text>
                  <Text className="opacity-60 font-medium text-white">
                    {phone}
                  </Text>
                  <Text className="opacity-60 font-medium text-white">
                    {address}
                  </Text>
                </View>
              </View>
            </View>

            <View className="w-[90%] mx-auto">
                <View className="mb-6">
                    <Text className="text-[#4C5664] text-lg mb-3">Number of Guest <Text className="text-red-700">*</Text></Text>
                    <TextInput
                        className="p-3 border-2 border-[#99A4B3] rounded-lg bg-white"
                        placeholder="Enter"
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-[#4C5664] text-lg mb-3">Name of the Guest <Text className="text-red-700">*</Text></Text>
                    <TextInput
                        className="p-3 border-2 border-[#99A4B3] rounded-lg bg-white"
                        placeholder="Enter"
                    />
                </View>

                <View className="mb-6 ">
                    <Text className="text-[#4C5664] text-lg mb-3">Mobile Number <Text className="text-red-700">*</Text></Text>
                    <TextInput
                        className="p-3 border-2 border-[#99A4B3] rounded-lg bg-white"
                        placeholder="Enter"
                    />
                </View>

                <View className="mb-6 ">
                            <Text className="text-[#4C5664] text-lg mb-3">Upload person photo </Text>
                <View className=' bg-white p-3 border-2 border-[#99A4B3]  rounded-md'>
                            <View className='flex-row justify-center items-center h-20 gap-x-2'>
                                <TouchableOpacity >
                                    <Text className='underline text-[#99A4B3]'>Take Picture</Text>
                                </TouchableOpacity>
                                <Feather name="camera" size={35} color="#99A4B3" />
                            </View>
               </View>
               </View>

                <View className="mb-6 ">
                    <Text className="text-[#4C5664] text-lg mb-3">Vehicle Type </Text>

                    <View className="flex-row gap-x-5">

                    <TouchableOpacity className="border-2 rounded-xl  ">
                        <Image
                            source={car}
                            className="h-28 w-28 m-auto "
                            />

                    </TouchableOpacity >

                    <TouchableOpacity className="border-2 rounded-xl">
                        <Image
                        className="h-28 w-28 m-auto"
                            source={bike}
                            />
                        
                    </TouchableOpacity>
                            </View>
                    
                </View>

                <View className="mb-6">
                    <Text className="text-[#4C5664] text-lg mb-3">Vehicle Number</Text>
                    <View className="flex-row gap-x-4 w-[80%] ">

                    <TextInput
                        className="p-3 border-b-2  flex-1"
                        
                        />
                    <TextInput
                        className="p-3 border-b-2  flex-1"
                        
                        />
                    <TextInput
                        className="p-3 border-b-2  flex-1"
                        
                        />
                    <TextInput
                        className="p-3 border-b-2  flex-1"
                        
                        />
                        </View>
                </View>

                <View className="mb-6">
                    <Text className="text-[#4C5664] text-lg mb-3">Stay Duration </Text>
                    <TextInput
                        className="p-3 border-2 border-[#99A4B3] rounded-lg bg-white"
                        placeholder="Enter"
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-[#4C5664] text-lg mb-3">Purpose of Visit <Text className="text-red-700">*</Text></Text>
                    <TextInput
                        className="p-3 border-2 border-[#99A4B3] rounded-lg bg-white"
                        placeholder="Enter"
                    />
                </View>

                <TouchableOpacity className="bg-[#283E71] p-3 w-[80%] mx-auto rounded-lg mb-4" onPress={() => handleNavigate(item)}>
                    <Text className="text-white text-center text-lg ">Send Notification</Text>
                </TouchableOpacity>

                

            </View>
        </ScrollView>
    </SafeAreaView>
    </>
  )
}