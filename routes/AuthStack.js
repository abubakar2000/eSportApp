
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import Login from '../screens/Login';
import Register from '../screens/Register';
import Scrims from "../screens/Scrims";
import AppDrawer from "./Drawer";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen component={Register} name="Register" />
                <Stack.Screen component={AppDrawer} name="AppDrawer" options={{
                    headerShown:false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export { AuthStack };