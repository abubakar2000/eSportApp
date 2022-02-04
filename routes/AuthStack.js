import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthStack =
    createAppContainer(createStackNavigator({
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        }
    }));

export { AuthStack };