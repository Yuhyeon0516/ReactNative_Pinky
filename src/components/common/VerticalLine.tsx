import {View} from "react-native";
import React from "react";

export default function VerticalLine({size}: {size: number}) {
    return (
        <View style={{height: "80%", width: size, backgroundColor: "gray"}} />
    );
}
