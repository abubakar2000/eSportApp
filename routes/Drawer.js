import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { AuthStack } from "./AuthStack";
import DrawerMenu from "../components/DrawerMenu";
import Wallet from "../screens/Wallet";
import Home from "../screens/Home";
import Account from "../screens/Account";
// import { Text, View } from "react-native";

const Drawer =
    createAppContainer(
        createDrawerNavigator(
            {
                Home: {
                    screen: Home,
                },
                Profile: {
                    screen: AuthStack,
                },
                Wallet: {
                    screen: Wallet,
                },
                AccountInformation: {
                    screen: Account
                }

            }
            ,
            {
                contentComponent: ({ navigation }) => <DrawerMenu navigation={navigation} />,
            }
        )
    )

export { Drawer }