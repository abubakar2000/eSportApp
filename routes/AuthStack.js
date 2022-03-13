
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Login from '../screens/Login';
import Register from '../screens/Register';
import AppDrawer from "./Drawer";

// const AuthStack =
//     createStackNavigator(
//         {
//             Login: {
//                 screen: Login,
//             },
//             Register: {
//                 screen: Register,
//             }
//         }, {
//         defaultNavigationOptions: {
//             headerShown: false
//         }
//     }
//     );

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