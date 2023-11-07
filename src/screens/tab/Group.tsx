import {Text} from "react-native";
import React from "react";
import ScreenBase from "../../components/common/ScreenBase";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";

export default function GroupScreen() {
    const navigation = useNavigation<NavigationProp<StackParams>>();

    function onClickAdd() {
        navigation.navigate("AddGroup");
    }

    return (
        <ScreenBase onClickAdd={onClickAdd}>
            <Text>Group</Text>
        </ScreenBase>
    );
}
