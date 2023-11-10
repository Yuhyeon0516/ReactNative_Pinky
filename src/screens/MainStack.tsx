import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useEffect, useState} from "react";
import MainTab from "./MainTab";
import AddPromise from "./popup/AddPromise";
import AddGroup from "./popup/AddGroup";
import {StackParams} from "../types/type";
import Register from "./popup/Register";
import Login from "./Login";
import WebViewScreen from "./popup/WebView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator, SafeAreaView} from "react-native";

const Stack = createNativeStackNavigator<StackParams>();

export default function MainStack() {
    const [isLoading, setIsLoading] = useState(true);
    const [initialRouteName, setInitialRouteName] =
        useState<keyof StackParams>("Login");

    useEffect(() => {
        // AsyncStorage.removeItem("pb_auth"); // TODO: 나중에 로그인, 회원가입 구현 다 하면 지워야함
        AsyncStorage.getAllKeys().then(keys => {
            if (keys.length > 0) {
                setInitialRouteName("Main");
            }
            setIsLoading(false);
            // TODO: login 정보를 가져와서 recoil state로 관리를 해줘야함
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <SafeAreaView
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <ActivityIndicator color={"#e8aced"} size={"large"} />
                </SafeAreaView>
            ) : (
                <Stack.Navigator
                    initialRouteName={initialRouteName}
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
                        <Stack.Screen
                            name="WebView"
                            component={WebViewScreen}
                            options={{presentation: "modal"}}
                        />
                    </Stack.Group>
                </Stack.Navigator>
            )}
        </>
    );
}
