import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthStack =
    // createAppContainer(
    createStackNavigator(
        {
            Login: {
                screen: Login,
            },
            Register: {
                screen: Register,
            }
        }, {
        defaultNavigationOptions: {
            headerShown: false
        }
    }
    );
// );

export { AuthStack };