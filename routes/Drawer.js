import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import { AuthStack } from "./AuthStack";
import Wallet from "../screens/Wallet";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Teams from "../screens/Teams";
import Matches from "../screens/Matches";
import Support from "../screens/Support";
import { Text, View } from "react-native";
import DrawerMenu from "../components/DrawerMenu";


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="history"
        screenOptions={{
          drawerStyle: {
            width: '90%',
          },
          drawerType: 'front',
          swipeEdgeWidth: 50,
          swipeMinDistance: 50,
          gestureEnabled: true,
          swipeEnabled: true,
        }}
        drawerContent={({ navigation }) => <DrawerMenu navigation={navigation} />} >



      <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Drawer.Screen options={{ headerShown: false }} name="Support" component={Support} />
      {/* <Drawer.Screen options={{ headerShown: false }} name="AuthStack" component={AuthStack} /> */}
      <Drawer.Screen options={{ headerShown: false }} name="Wallet" component={Wallet} />
      <Drawer.Screen options={{ headerShown: false }} name="Account" component={Account} />
      <Drawer.Screen options={{ headerShown: false }} name="Teams" component={Teams} />
      <Drawer.Screen options={{ headerShown: false }} name="Matches" component={Matches} />
    </Drawer.Navigator>
    </NavigationContainer >

    )
}

export default AppDrawer;