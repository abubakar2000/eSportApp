import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

const Drawer =
    createAppContainer(
        createDrawerNavigator(
            {
                Home: {
                    screen: AppStack,
                    
                },
                Auth: {
                    screen: AuthStack,
                }
            },
            
            
        )
    )

export { Drawer }