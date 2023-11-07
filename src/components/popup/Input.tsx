import {KeyboardTypeOptions, TextInput} from "react-native";
import React from "react";

type InputProps = {
    value: string;
    onChagneText: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string;
    keyboardType?: KeyboardTypeOptions;
};

export default function Input({
    value,
    onChagneText,
    placeHolder,
    keyboardType = "default",
}: InputProps) {
    return (
        <TextInput
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChagneText}
            placeholder={placeHolder}
            placeholderTextColor={"gray"}
            style={{
                backgroundColor: "white",
                flex: 1,
                height: 50,
                borderRadius: 50,
                borderWidth: 1,
                paddingHorizontal: 20,
                color: "black",
            }}
        />
    );
}
