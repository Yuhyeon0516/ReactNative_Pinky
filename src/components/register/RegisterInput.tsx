import {View, Text, TextInput} from "react-native";
import React from "react";
import Spacer from "../common/Spacer";

type RegisterInputProps = {
    title: string;
    value: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    secure?: boolean;
};

export default function RegisterInput({
    title,
    value,
    onChangeText,
    secure = true,
}: RegisterInputProps) {
    return (
        <View style={{width: "100%", paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>
                {title}
            </Text>
            <Spacer height={10} />
            <TextInput
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={"gray"}
                style={{
                    backgroundColor: "white",
                    height: 50,
                    borderRadius: 50,
                    borderWidth: 1,
                    paddingHorizontal: 20,
                    color: "black",
                }}
            />
        </View>
    );
}
