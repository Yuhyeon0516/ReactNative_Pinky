/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./src/screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import GroupScreen from "./src/screens/Group";
import SettingScreen from "./src/screens/Setting";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Text} from "react-native";
import {RecoilRoot} from "recoil";

type TabList = {
    Home: undefined;
    Setting: undefined;
    Group: undefined;
};

const Tab = createBottomTabNavigator<TabList>();

function App(): JSX.Element {
    function getIcon(name: string, focused: boolean) {
        if (name === "Home") {
            return focused ? "home" : "home-outline";
        } else if (name === "Setting") {
            return focused ? "settings" : "settings-outline";
        } else {
            return focused ? "person" : "person-outline";
        }
    }

    function getLabel(name: string) {
        if (name === "Home") return "홈";
        else if (name === "Setting") return "설정";
        else return "그룹";
    }

    return (
        <RecoilRoot>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Tab.Navigator
                        screenOptions={({route}) => {
                            return {
                                headerShown: false,
                                tabBarActiveTintColor: "#e8aced",
                                tabBarInactiveTintColor: "black",
                                tabBarStyle: {
                                    paddingTop: 7,
                                    borderTopLeftRadius: 50,
                                    borderTopRightRadius: 50,
                                    position: "absolute",
                                    overflow: "hidden",
                                    minHeight: 60,
                                },
                                tabBarIcon({color, size, focused}) {
                                    return (
                                        <Ionicons
                                            size={size}
                                            name={getIcon(route.name, focused)}
                                            color={color}
                                        />
                                    );
                                },
                                tabBarLabel({color}) {
                                    return (
                                        <Text
                                            style={{
                                                color: color,
                                                fontSize: 14,
                                                fontWeight: "600",
                                            }}>
                                            {getLabel(route.name)}
                                        </Text>
                                    );
                                },
                            };
                        }}>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Group" component={GroupScreen} />
                        <Tab.Screen name="Setting" component={SettingScreen} />
                    </Tab.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </RecoilRoot>
    );
}

export default App;
