import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screen/login";
import Gate from "./app/screen/gate";
import Home from "./app/screen/home";
import Plannedvisitorslist from "./app/screen/plannedvisitorslist";
import Visitorsdetails from "./app/screen/visitorsdetails";
import 'react-native-gesture-handler'; // Must be at the top for gesture handling
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Notification from "./app/screen/notification";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Createnewvisitor from "./app/screen/unplannedVisitors/createnewvisitor";
import Visitorsmenu from "./app/screen/plannedVisitors/visitorsmenu";
import Enternewvisitorsdetails from "./app/screen/unplannedVisitors/enterNewVisitorsDetails";
import Newvisitorsentrydetails from "./app/screen/unplannedVisitors/newvisitorsentrydetails";
import Pendingreqlist from "./app/screen/pendingRequestfromowner/pendingreqlist";
import Pendingvisitorsdetails from "./app/screen/pendingRequestfromowner/pendingvisitorsdetails";
import Checkoutlist from "./app/screen/allvisitorscheckout/checkoutlist";
import Checkoutvisitordetail from "./app/screen/allvisitorscheckout/checkoutvisitordetail";
import Completedvisitorslist from "./app/screen/completedvisitors/completedvisitorslist";
import Myaccount from "./app/screen/drawer/myaccount";
import Historypage from "./app/screen/drawer/history";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <>

<GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="home" component={Home} options={{ title: 'Home' }} />
          <Drawer.Screen name="myaccount" component={Myaccount} options={{ title: 'My Account' }} />
          <Drawer.Screen name="history" component={Historypage} options={{ title: 'History' }} />
        </Drawer.Navigator>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="gate"
            component={Gate}
            options={{ headerShown: false, title: "Gate" }}
          />

          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Visitors"
            component={Visitorsmenu}
            options={{ headerShown: true, title: "Visitors" }}
          />

          <Stack.Screen
            name="Plannedvisitorscheckin"
            component={Plannedvisitorslist}
            options={{ headerShown: true, title: "Planned Visitor Check - IN" }}
          />

          <Stack.Screen
            name="Visitorsentrydetails"
            component={Visitorsdetails}
            options={{ headerShown: true, title: "Visitors Entry Details" }}
          />

          <Stack.Screen
            name="notification"
            component={Notification}
            options={{ headerShown: true, title: "Notification" }}
          />

          <Stack.Screen
            name="createnewvisitor"
            component={Createnewvisitor}
            options={{ headerShown: true, title: "Create new Visitor" }}
          />

          <Stack.Screen
            name="enternewvisitorsdetails"
            component={Enternewvisitorsdetails}
            options={{ headerShown: true, title: "Enter new Visitor Details" }}
          />

          <Stack.Screen
            name="Newvisitorsentrydetails"
            component={Newvisitorsentrydetails}
            options={{ headerShown: true, title: "Visitors Entry Details" }}
          />

          <Stack.Screen
            name="Pendingreqlist"
            component={Pendingreqlist}
            options={{ headerShown: true, title: "Pending Request from Owner" }}
          />

          <Stack.Screen
            name="pendingvisitorsdetails"
            component={Pendingvisitorsdetails}
            options={{ headerShown: true, title: "Visitors Entry Details" }}
          />

          <Stack.Screen
            name="checkoutlist"
            component={Checkoutlist}
            options={{ headerShown: true, title: "All Visitor Check - Out" }}
          />

          <Stack.Screen
            name="checkoutvisitordetail"
            component={Checkoutvisitordetail}
            options={{ headerShown: true, title: "Visitor Details" }}
          />

          <Stack.Screen
            name="completedvisitorslist"
            component={Completedvisitorslist}
            options={{ headerShown: true, title: "All Completed Visitors" }}
          />

<Stack.Screen
            name="myaccount"
            component={Myaccount}
            options={{ headerShown: true, title: "My account" }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>

      
      <StatusBar style="auto" />
    </>
  );
}
