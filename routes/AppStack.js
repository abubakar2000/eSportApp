import { createStackNavigator } from "react-navigation-stack";
import AppBar from "../components/AppBar";
import Home from "../screens/Home";

const AppStack =
    // createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: Home,
            }
        },
        {
            defaultNavigationOptions: ({navigation}) => {
                return {
                    header : () => <AppBar title={"HAEXR"} navigation={navigation}/>, 
                }
            }
        }
    );
// );

export { AppStack }