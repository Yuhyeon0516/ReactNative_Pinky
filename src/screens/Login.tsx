import {View, Text, SafeAreaView, TextInput} from "react-native";
import React, {useState} from "react";
import Spacer from "../components/common/Spacer";
import PinkButton from "../components/common/PinkButton";
import VerticalLine from "../components/common/VerticalLine";
import Google from "../components/login/Google";
import Kakao from "../components/login/Kakao";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{flex: 1}}>
            <Spacer height={20} />

            <View style={{width: "100%", paddingHorizontal: 20}}>
                <Text
                    style={{fontSize: 20, fontWeight: "bold", color: "black"}}>
                    이메일
                </Text>
                <Spacer height={10} />
                <TextInput
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
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

            <Spacer height={20} />
            <View style={{width: "100%", paddingHorizontal: 20}}>
                <Text
                    style={{fontSize: 20, fontWeight: "bold", color: "black"}}>
                    비밀번호
                </Text>
                <Spacer height={10} />
                <TextInput
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
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

            <Spacer height={20} />

            <View style={{paddingHorizontal: 20}}>
                <PinkButton text="로그인" />
            </View>

            <Spacer height={20} />

            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                }}>
                <Text style={{color: "gray", fontSize: 14, fontWeight: "bold"}}>
                    비밀번호 찾기
                </Text>
                <VerticalLine size={1} />
                <Text style={{color: "gray", fontSize: 14, fontWeight: "bold"}}>
                    회원가입
                </Text>
            </View>

            <Spacer height={50} />

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text style={{color: "gray", fontSize: 20, fontWeight: "bold"}}>
                    또는
                </Text>
            </View>

            <Spacer height={30} />

            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    flexDirection: "row",
                }}>
                <Google />

                <Kakao />
            </View>
        </SafeAreaView>
    );
}
