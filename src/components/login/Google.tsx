import {Image, TouchableOpacity} from "react-native";
import React from "react";

export default function Google() {
    return (
        <TouchableOpacity
            style={{
                width: 50,
                height: 50,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "black",
            }}>
            <Image
                source={require("../../assets/Google.png")}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
        </TouchableOpacity>
    );
}
