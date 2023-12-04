import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import React, {useState} from "react";
import Spacer from "../components/common/Spacer";
import PinkButton from "../components/common/PinkButton";
import Google from "../components/login/Google";
import Kakao from "../components/login/Kakao";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../types/type";
import {handleLogin} from "../utils/pb";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<NavigationProp<StackParams>>();

    function onPressRegister() {
        navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer height={20} />
                <View
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        flexDirection: "column",
                        backgroundColor: "white",
                    }}>
                    <Image
                        source={require("../assets/Promise.png")}
                        style={{width: 100, height: 100}}
                    />
                </View>
                <Spacer height={10} />
                <Text
                    style={{
                        color: "#e8aced",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 12,
                    }}>
                    핑키와 같이 친구들과의 약속을 관리해보세요.
                </Text>

                <Spacer height={20} />

                <View style={{width: "100%", paddingHorizontal: 20}}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                        }}>
                        이메일
                    </Text>
                    <Spacer height={10} />
                    <TextInput
                        autoCapitalize="none"
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
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                        }}>
                        비밀번호
                    </Text>
                    <Spacer height={10} />
                    <TextInput
                        autoCapitalize="none"
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

                <KeyboardAvoidingView style={{paddingHorizontal: 20}}>
                    <PinkButton
                        text="로그인"
                        onPress={() => handleLogin(email, password, navigation)}
                    />
                </KeyboardAvoidingView>

                <Spacer height={20} />

                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                    }}>
                    <TouchableOpacity onPress={onPressRegister}>
                        <Text
                            style={{
                                color: "gray",
                                fontSize: 14,
                                fontWeight: "bold",
                            }}>
                            회원가입
                        </Text>
                    </TouchableOpacity>
                </View>

                <Spacer height={30} />

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text
                        style={{
                            color: "gray",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>
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
            </ScrollView>
        </SafeAreaView>
    );
}
