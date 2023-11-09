import {View, SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import Spacer from "../../components/common/Spacer";
import PinkButton from "../../components/common/PinkButton";
import RegisterInput from "../../components/register/RegisterInput";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "whitesmoke"}}>
            <Header title="회원가입" />
            <RegisterInput
                title="이메일"
                value={email}
                onChangeText={setEmail}
            />

            <Spacer height={20} />

            <RegisterInput
                title="비밀번호"
                value={password}
                onChangeText={setPassword}
            />

            <Spacer height={20} />

            <RegisterInput
                title="비밀번호 확인"
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
            />

            <Spacer height={20} />

            <View style={{paddingHorizontal: 20}}>
                <PinkButton text="회원가입" />
            </View>
        </SafeAreaView>
    );
}
