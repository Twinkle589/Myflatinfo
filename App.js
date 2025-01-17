import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import screens
import Login from "./app/screen/login";
import Gate from "./app/screen/gate";
import Home from "./app/screen/home";
import Plannedvisitorslist from "./app/screen/plannedvisitorslist";
import Visitorsdetails from "./app/screen/visitorsdetails";
import Notification from "./app/screen/notification";
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

// Stack Navigator for Screens
function MainStackNavigator() {
  return (
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
    </Stack.Navigator>
  );
}

// Drawer Navigator with Stack Screens
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
          <Drawer.Screen name="My Account" component={Myaccount} />
          <Drawer.Screen name="History" component={Historypage} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
