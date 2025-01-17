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
import logoicon from "../../assets/images/logoicon.png";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Octicons from '@expo/vector-icons/Octicons';
import visitors from "../../assets/images/home/visitors.png";
import vehicle from "../../assets/images/home/vehicle.png";
import Feather from "@expo/vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import gatepass from "../../assets/images/home/gatepass.png";
import delivery from "../../assets/images/home/delivery.png";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigate = useNavigation();

  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="py-6">
          <View className="flex flex-row justify-between mb-10 w-[90%] mx-auto ">
            <View className="flex flex-row items-center">
             
                <Image
                  className="h-10 "
                  resizeMode="contain"
                  source={logoicon}
                />
             
              <Text className="text-xl text-[#6E6868]">
                Hello Security Gaurd !
              </Text>
            </View>

            <View className="flex flex-row items-center gap-x-4">
              <TouchableOpacity
                onPress={() => navigate.navigate("notification")}
              >
                
              <Octicons name="bell-fill" size={30} color="#28303F" />
              </TouchableOpacity>


              <TouchableOpacity onPress={() => navigate.navigate("myaccount")}>
               
                  <SimpleLineIcons name="menu" size={24} color="#28303F" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mx-4">
            <View className="mb-10 flex-row justify-between border-2 border-[#99A4B3] w-full  rounded-lg p-3 ">
              <TextInput
                className="flex-1"
                placeholder="Search by last 4 digit of Vehicle no. or Phone number"
              />
              <Feather name="search" size={24} color="black" />
            </View>
          </View>
          <View className="  flex-row items-center justify-center mx-auto   ">
            <View className="flex flex-1 justify-center items-center flex-col  ">
              
              <TouchableOpacity
                className="bg-[#FFBE58] w-44  p-6 h-60  rounded-2xl mb-4"
                onPress={() => navigate.navigate("Visitors")}
              >
                <Image
                  className="h-14 mx-auto"
                  resizeMode="contain"
                  source={visitors}
                />
                <Text className="text-white text-xl text-center">Visitors</Text>
                <Text className="text-white text-sm ">86 Visitors IN</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#28D4C4]  w-44 p-6 h-44  rounded-2xl   ">
                <Image
                  className="h-14 mx-auto"
                  resizeMode="contain"
                  source={delivery}
                />
                <Text className="text-white text-xl text-center">
                  Delivery Management
                </Text>
                <Text className="text-white text-sm">10 Parcel Recevied</Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-1 flex-col justify-center items-center  ">
              <TouchableOpacity className="bg-[#977CFF]  w-44 p-6  h-44  rounded-2xl mb-4">
                <Image
                  className="h-12 mx-auto"
                  resizeMode="contain"
                  source={gatepass}
                />
                <Text className="text-white text-xl text-center">
                  Gate Pass
                </Text>
                <Text className="text-white text-sm">15 Gate Pass</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#F79E90]  w-44 p-6 h-60  rounded-2xl">
                <Image
                  className="h-14 mx-auto"
                  resizeMode="contain"
                  source={vehicle}
                />
                <Text className="text-white text-xl text-center">
                  Vehicle Management
                </Text>
                <Text className="text-white text-sm">12 Outside Vehicle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
