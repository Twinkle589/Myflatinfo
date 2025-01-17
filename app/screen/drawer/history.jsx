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
import { useNavigation } from "@react-navigation/native";

export default function Historypage() {

    return (
        <>

        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>
                    History
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>

        </>
    )
}