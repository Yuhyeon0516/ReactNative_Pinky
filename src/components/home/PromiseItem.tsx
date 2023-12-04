import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {PromiseType} from "../../types/type";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PromiseItem({promise}: {promise: PromiseType}) {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                height: 120,
                marginHorizontal: 20,
                borderWidth: 2,
                borderColor: "#e8aced",
                borderRadius: 30,
                backgroundColor: "white",
                padding: 20,
                flexDirection: "column",
                gap: 5,
                justifyContent: "center",
            }}>
            <Text>그룹명: {promise.groupId}</Text>
            <View style={{flexDirection: "row"}}>
                <Ionicons
                    name="location-outline"
                    style={{marginRight: 5, fontSize: 20}}
                />
                <Text>영통 시청 앞</Text>
            </View>
            <Text>약속 일자: {promise.time.toLocaleString()}</Text>
            {/* <Text>{promise.trackingStartTime.toLocaleTimeString()}</Text>
            <Text>{promise.trakingEndTime.toLocaleTimeString()}</Text> */}
        </TouchableOpacity>
    );
}
