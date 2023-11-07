import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";

export default function Header({title}: {title: string}) {
    const navigation = useNavigation<NavigationProp<StackParams>>();

    function onPressBack() {
        navigation.goBack();
    }

    return (
        <View
            style={{
                width: "100%",
                height: 70,
                backgroundColor: "whitesmoke",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}>
            <TouchableOpacity
                onPress={onPressBack}
                style={{
                    position: "absolute",
                    left: 0,
                    zIndex: 10,
                    padding: 10,
                }}>
                <MaterialIcons
                    name="arrow-back-ios-new"
                    size={25}
                    color={"black"}
                />
            </TouchableOpacity>

            <View>
                <Text
                    style={{color: "black", fontSize: 18, fontWeight: "bold"}}>
                    {title}
                </Text>
            </View>
        </View>
    );
}
