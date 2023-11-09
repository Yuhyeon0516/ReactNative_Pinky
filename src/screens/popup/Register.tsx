import {
    SafeAreaView,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import Spacer from "../../components/common/Spacer";
import PinkButton from "../../components/common/PinkButton";
import RegisterInput from "../../components/register/RegisterInput";
import pb from "../../utils/pb";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigation = useNavigation<NavigationProp<StackParams>>();

    async function onPressRegister() {
        if (!email) {
            Alert.alert("이메일을 입력해주세요.");
            return;
        }

        if (!password || !passwordConfirm) {
            Alert.alert("비밀번호를 입력해주세요.");
            return;
        }

        if (password !== passwordConfirm) {
            Alert.alert("비밀번호가 일치하지않습니다.");
            return;
        }

        await pb.collection("users").create({
            email,
            password,
            passwordConfirm,
        });

        navigation.goBack();
        Alert.alert("회원가입이 완료되었습니다.\n로그인을 시도해주세요.");
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "whitesmoke"}}>
            <ScrollView style={{flexGrow: 0}} stickyHeaderIndices={[0]}>
                <Header title="회원가입" />
                <RegisterInput
                    secure={false}
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
            </ScrollView>
            <Spacer height={20} />
            <KeyboardAvoidingView style={{paddingHorizontal: 20}}>
                <PinkButton text="회원가입" onPress={onPressRegister} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
