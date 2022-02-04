import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";

const AppStack =
    // createAppContainer(
        createStackNavigator(
            {
                Home: {
                    screen: Home
                }
            },
            {
                defaultNavigationOptions: {
                    headerShown: false
                }
            }
        );
    // );

export { AppStack }