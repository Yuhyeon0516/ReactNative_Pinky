import {TouchableOpacity, Image} from "react-native";
import React from "react";

export default function Kakao() {
    return (
        <TouchableOpacity
            style={{
                width: 50,
                height: 50,
                backgroundColor: "yellow",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "black",
            }}>
            <Image
                source={require("../../assets/Kakao.png")}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
        </TouchableOpacity>
    );
}
