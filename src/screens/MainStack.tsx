import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import MainTab from "./MainTab";
import AddPromise from "./popup/AddPromise";
import AddGroup from "./popup/AddGroup";
import {StackParams} from "../types/type";

const Stack = createNativeStackNavigator<StackParams>();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainTab} />
            <Stack.Screen
                name="AddPromise"
                component={AddPromise}
                options={{
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="AddGroup"
                component={AddGroup}
                options={{presentation: "modal"}}
            />
        </Stack.Navigator>
    );
}
