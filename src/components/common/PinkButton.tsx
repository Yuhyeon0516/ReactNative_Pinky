import {View, Text} from "react-native";
import React from "react";

export default function PinkButton({text}: {text: string}) {
    return (
        <View
            style={{
                width: 150,
                height: 50,
                backgroundColor: "#e8aced",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Text
                style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 18,
                    textAlign: "center",
                }}>
                {text}
            </Text>
        </View>
    );
}
