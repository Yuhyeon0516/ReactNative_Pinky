import React from "react";
import ScreenBase from "../../components/common/ScreenBase";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
// import NaverMapView from "react-native-nmap";

export default function GroupScreen() {
    const navigation = useNavigation<NavigationProp<StackParams>>();

    function onClickAdd() {
        navigation.navigate("AddGroup");
    }

    return (
        <ScreenBase onClickAdd={onClickAdd}>
            {/* <NaverMapView style={{flex: 1}} /> */}
        </ScreenBase>
    );
}
