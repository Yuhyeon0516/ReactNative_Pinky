import {TouchableOpacity, Image} from "react-native";
import React, {useCallback, useEffect} from "react";
import {AuthMethodState} from "../../global/recoil";
import {useRecoilState} from "recoil";
import {StackParams} from "../../types/type";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {afterWebViewAction, getAuthMethods} from "./login";

export default function Kakao() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const [authMethod, setAuthMethod] = useRecoilState(AuthMethodState);

    const onPressKakao = useCallback(async () => {
        try {
            const auth = await getAuthMethods("kakao");

            setAuthMethod(prev => {
                return {
                    ...prev,
                    codeVerifier: auth.codeVerifier,
                    beforeState: auth.state,
                    authUrl: auth.authUrl + "http://localhost:3000/kakao/auth",
                };
            });

            navigation.navigate("WebView", {
                url: decodeURIComponent(
                    auth.authUrl + "http://localhost:3000/kakao/auth",
                ),
                provider: "kakao",
            });
        } catch (error: any) {
            console.log(error.originalError);
        }
    }, [navigation, setAuthMethod]);

    useEffect(() => {
        navigation.addListener("focus", async () => {
            if (
                authMethod.afterState &&
                authMethod.beforeState &&
                authMethod.code &&
                authMethod.codeVerifier
            ) {
                await afterWebViewAction("kakao", navigation, authMethod);
            }
        });
    }, [authMethod, navigation]);

    return (
        <TouchableOpacity
            onPress={onPressKakao}
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
