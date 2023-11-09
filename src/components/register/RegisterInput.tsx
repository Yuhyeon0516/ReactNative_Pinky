import {View, Text, TextInput} from "react-native";
import React from "react";
import Spacer from "../common/Spacer";
import PinkButton from "../common/PinkButton";

type RegisterInputProps = {
    title: string;
    value: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    secure?: boolean;
    showButton?: boolean;
    onPressButton?: () => void;
};

export default function RegisterInput({
    title,
    value,
    onChangeText,
    secure = true,
    showButton = false,
    onPressButton,
}: RegisterInputProps) {
    return (
        <View style={{width: "100%", paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>
                {title}
            </Text>
            <Spacer height={10} />
            <View style={{flexDirection: "row", flex: 1}}>
                <TextInput
                    autoCapitalize="none"
                    secureTextEntry={secure}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={"gray"}
                    style={{
                        backgroundColor: "white",
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 1,
                        flex: 1,
                        paddingHorizontal: 20,
                        color: "black",
                    }}
                />
                {showButton && (
                    <View style={{width: "25%", marginLeft: 10}}>
                        <PinkButton text="중복확인" onPress={onPressButton} />
                    </View>
                )}
            </View>
        </View>
    );
}
