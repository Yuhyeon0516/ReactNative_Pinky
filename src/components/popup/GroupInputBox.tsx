import {View, Text, KeyboardTypeOptions} from "react-native";
import React from "react";
import Spacer from "../common/Spacer";
import Input from "./Input";

type GroupInputBoxProps = {
    value: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    placeHolder: string;
    keyboardType?: KeyboardTypeOptions;
};

export default function GroupInputBox({
    value,
    onChangeText,
    title,
    placeHolder,
    keyboardType = "default",
}: GroupInputBoxProps) {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
            }}>
            <Text
                style={{
                    fontSize: 18,
                    color: "black",
                    fontWeight: "bold",
                }}>
                {title}
            </Text>
            <Spacer height={15} />
            <Input
                value={value}
                onChagneText={onChangeText}
                placeHolder={placeHolder}
                keyboardType={keyboardType}
            />
        </View>
    );
}
