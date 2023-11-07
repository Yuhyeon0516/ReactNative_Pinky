import {Text, TouchableOpacity} from "react-native";
import React from "react";

export default function PinkButton({text}: {text: string}) {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                height: 50,
                backgroundColor: "#e8aced",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
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
        </TouchableOpacity>
    );
}
