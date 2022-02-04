import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthStack =
    // createAppContainer(
    createStackNavigator(
        {
            Login: {
                screen: Login,
                navigationOptions: {
                    title: 'Login',
                }
            },
            Register: {
                screen: Register,
                navigationOptions: {
                    headerShown: true
                }
            }
        }, {
        defaultNavigationOptions: {
            headerBackTitle: 'Back to Login',
            headerShown: false
        }
    }
    );
// );

export { AuthStack };