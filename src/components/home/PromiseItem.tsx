import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {PromiseType} from "../../types/type";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PromiseItem({promise}: {promise: PromiseType}) {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                height: 200,
                marginHorizontal: 20,
                borderWidth: 2,
                borderColor: "#e8aced",
                borderRadius: 30,
                backgroundColor: "white",
                padding: 20,
                flexDirection: "column",
                gap: 5,
            }}>
            <Text>{promise.groupId}</Text>
            <View style={{flexDirection: "row"}}>
                <Ionicons name="location-outline" />
                <Text>
                    {promise.location.lag}, {promise.location.lng}
                </Text>
            </View>
            <Text>{promise.time.toLocaleString()}</Text>
            <Text>{promise.trackingStartTime.toLocaleTimeString()}</Text>
            <Text>{promise.trakingEndTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
    );
}
