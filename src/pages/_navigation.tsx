import React from "react";
import Home from "./Home"
import Settings from "./Settings";
import  SetTime  from "./SetTime";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function _navigation(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                animation:"fade_from_bottom"
            }}
        >
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="setting" component={Settings}/>
            <Stack.Screen name="settime" component={SetTime}/>
        </Stack.Navigator>
    )
}