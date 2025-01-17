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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Visitorsdetails({ route }) {
  const { item } = route.params;
  const { address, image, name, phone, tower } = item;
  const refRbsheet = useRef()
  
  const [requestUser, setRequestUser] = useState({
    image: require("../../assets/images/plannedvisitorslist/dp1.png"),
    name: "Joshana T",
    phone: "+91 8144332274",
    tower: "A",
    intime: "07:40pm",
    Date: "19 Jan",
    mainImg: "Image.png", 
  });

  const confirmcheck = () => { 
    return(
        <RBSheet
        ref={refRbsheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Dimensions.get('window').height/3}
        customStyles={{
            wrapper:{
                backgroundColor:"transparent"
            },
            draggableIcon:{
                backgroundColor:"#000"
            }
        }}
        >
            <View className="p-3 rounded-2xl flex-col gap-y-6">
            <Text className="text-center border-b-[1px] border-[#E0E0E0] py-3 text-xl font-bold">Confirm Check In</Text>

        <View className="flex flex-row w-[90%] justify-center items-center gap-x-4 mx-auto ">
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>
            <TextInput className="border-b-2 flex-1"></TextInput>

        </View>

        <Text className="text-center  text-sm font-thin">Enter Code Here</Text>

            <TouchableOpacity className="bg-[#283E71] w-[70%] mx-auto rounded-md">
                <Text className="text-white text-center p-3 text-base font-bold">Update IN Time</Text>
            </TouchableOpacity>
            </View>
        </RBSheet>
    )
    
}



  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View className="p-4">
          {confirmcheck()}
                      <View className="my-2 text-white bg-[#283E71] rounded-xl">
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

            <Text className="font-medium my-3 ">Today Visitor</Text>
            <View className="bg-white p-2">
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row items-center">
                    <Image
                      source={requestUser.image}
                      className="w-8 h-8 rounded-full"
                    />
                    <View className="px-3">
                      <Text className="font-bold">{requestUser.name}</Text>
                     
                    </View>
                  <Text className="opacity-60 font-medium">{address}</Text>
                  </View>
                </View>
              </View>
              <View className="p-1">
                <View className="border-2 p-1 rounded-md mt-3 mb-3 flex-row justify-center items-center border-gray-400">
                  <Text>
                    <Text className="font-bold">Time: </Text>
                    {requestUser.intime} -{" "}
                    <Text className="font-bold">Date: </Text>
                    {requestUser.Date}
                  </Text>
                </View>

                <View className="  flex-col gap-y-3">
                    <View className="flex flex-row justify-between">
                      <View className="flex-row items-center">
                      <MaterialCommunityIcons name="account-group" size={24} color="#283E71" />
                        <Text>{" "}10 members</Text>
                      </View>
                        <Text>Family,  +91 81784 32275</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                      <View className="flex-row items-center">
                      <FontAwesome name="car" size={20} color="#283E71" />
                        <Text>{" "}Car</Text>
                      </View>
                      <View className="flex-row items-center">
                      <AntDesign name="minussquareo" size={20} color="283E71" />
                        <Text>{" "}No- TL4052</Text>
                      </View>
                    </View>
                </View>

              </View>
            </View>
                <View className="bg-[#F3FBFE] py-5 w-full">
                    <Text className="text-center text-xl">Code : ASF546835</Text>
                    <TouchableOpacity className="bg-[#64A935] w-[75%] mx-auto  p-3 rounded-md my-5" onPress={() => refRbsheet.current.open()}>
                        <Text className="text-white text-center ">Check IN Time</Text>
                    </TouchableOpacity>
                </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
