import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import MainTab from "./MainTab";
import AddPromise from "./popup/AddPromise";
import AddGroup from "./popup/AddGroup";
import {StackParams} from "../types/type";
import Register from "./popup/Register";
import Login from "./Login";

const Stack = createNativeStackNavigator<StackParams>();

export default function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name="Main" component={MainTab} />
            </Stack.Group>
            <Stack.Group>
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
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{presentation: "modal"}}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}
