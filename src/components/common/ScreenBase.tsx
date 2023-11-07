import {SafeAreaView, TouchableOpacity} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

type ScreenBaseProps = {
    children: React.ReactNode;
    floatButtonShow?: boolean;
    onClickAdd: () => void;
};

export default function ScreenBase({
    children,
    floatButtonShow = true,
    onClickAdd,
}: ScreenBaseProps) {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "whitesmoke",
                position: "relative",
            }}>
            {floatButtonShow && (
                <TouchableOpacity
                    onPress={onClickAdd}
                    style={{
                        position: "absolute",
                        right: 30,
                        bottom: tabBarHeight + 30,
                        backgroundColor: "#e8aced",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 99,
                    }}>
                    <FontAwesome size={30} name="plus" color={"white"} />
                </TouchableOpacity>
            )}
            {children}
        </SafeAreaView>
    );
}
