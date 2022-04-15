import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Teams from "../screens/Teams";
import Matches from "../screens/Matches";
import Support from "../screens/Support";
import DrawerMenu from "../components/DrawerMenu";
import Wallet from "../screens/Wallet";
import Scrims from "../screens/Scrims";
import ScrimsExt from "../screens/ScrimsExt";
import Login from "../screens/Login";
import Tournaments from "../screens/Tournaments";
import ProMatches from "../screens/ProMatches";
import ScrimsMatches from "../screens/ScrimsMatches";
import BookTournaments from "../screens/BookTournaments";
import RoundsInformation from "../screens/RoundsInformation";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
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
      initialRouteName="AuthStack"
      drawerContent={({ navigation }) => <DrawerMenu navigation={navigation} />} >

      <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Drawer.Screen options={{ headerShown: false }} name="Support" component={Support} />
      <Drawer.Screen options={{ headerShown: false }} name="Wallet" component={Wallet} />
      <Drawer.Screen options={{ headerShown: false }} name="Account" component={Account} />
      <Drawer.Screen options={{ headerShown: false }} name="Teams" component={Teams} />
      <Drawer.Screen options={{ headerShown: false }} name="Matches" component={Matches} />
      <Drawer.Screen options={{ headerShown: false }} name="Scrims" component={Scrims} />
      <Drawer.Screen options={{ headerShown: false }} name="ScrimsMatches" component={ScrimsMatches} />
      <Drawer.Screen options={{ headerShown: false }} name="BookTournaments" component={BookTournaments} />
      <Drawer.Screen options={{ headerShown: false }} name="ProMatches" component={ProMatches} />
      <Drawer.Screen options={{ headerShown: false }} name="Tournaments" component={Tournaments} />
      <Drawer.Screen options={{ headerShown: false }} name="ScrimsExt" component={ScrimsExt} />
      <Drawer.Screen options={{ headerShown: false }} name="RoundsInformation" component={RoundsInformation} />
      <Drawer.Screen options={{ headerShown: false }} name="Login" component={Login} />
    </Drawer.Navigator>

  )
}

export default AppDrawer;