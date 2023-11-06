import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./src/screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import GroupScreen from "./src/screens/Group";
import SettingScreen from "./src/screens/Setting";
import {SafeAreaProvider} from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Text} from "react-native";

type TabList = {
    Home: undefined;
    Setting: undefined;
    Group: undefined;
};

const Tab = createBottomTabNavigator<TabList>();

function App(): JSX.Element {
    return (
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
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                borderLeftWidth: 0.2,
                                borderRightWidth: 0.2,
                                position: "absolute",
                                overflow: "hidden",
                                minHeight: 60,
                            },
                            // eslint-disable-next-line react/no-unstable-nested-components
                            tabBarIcon({color, size}) {
                                if (route.name === "Home") {
                                    return (
                                        <MaterialIcons
                                            name="home"
                                            color={color}
                                            size={size}
                                        />
                                    );
                                } else if (route.name === "Group") {
                                    return (
                                        <MaterialIcons
                                            name="groups"
                                            color={color}
                                            size={size}
                                        />
                                    );
                                } else {
                                    return (
                                        <MaterialIcons
                                            name="settings"
                                            color={color}
                                            size={size}
                                        />
                                    );
                                }
                            },
                            // eslint-disable-next-line react/no-unstable-nested-components
                            tabBarLabel({color}) {
                                if (route.name === "Home") {
                                    return (
                                        <Text
                                            style={{
                                                color: color,
                                                fontSize: 14,
                                                fontWeight: "600",
                                            }}>
                                            홈
                                        </Text>
                                    );
                                } else if (route.name === "Group") {
                                    return (
                                        <Text
                                            style={{
                                                color: color,
                                                fontSize: 14,
                                                fontWeight: "600",
                                            }}>
                                            그룹
                                        </Text>
                                    );
                                } else {
                                    return (
                                        <Text
                                            style={{
                                                color: color,
                                                fontSize: 14,
                                                fontWeight: "600",
                                            }}>
                                            설정
                                        </Text>
                                    );
                                }
                            },
                        };
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Group" component={GroupScreen} />
                    <Tab.Screen name="Setting" component={SettingScreen} />
                </Tab.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default App;
