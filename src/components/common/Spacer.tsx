import {View} from "react-native";
import React from "react";

export default function Spacer({height}: {height: number}) {
    return <View style={{height: height}} />;
}
