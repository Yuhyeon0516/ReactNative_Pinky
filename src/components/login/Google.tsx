import {Image, TouchableOpacity} from "react-native";
import React, {useCallback, useEffect} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {useRecoilState} from "recoil";
import {AuthMethodState} from "../../global/recoil";
import {afterWebViewAction, getAuthMethods} from "./login";

export default function Google() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const [authMethod, setAuthMethod] = useRecoilState(AuthMethodState);

    const onPressGoogle = useCallback(async () => {
        try {
            const auth = await getAuthMethods("google");

            setAuthMethod(prev => {
                return {
                    ...prev,
                    codeVerifier: auth.codeVerifier,
                    beforeState: auth.state,
                    authUrl: auth.authUrl + "http://localhost:3000/google/auth",
                };
            });

            navigation.navigate("WebView", {
                url: decodeURIComponent(
                    auth.authUrl + "http://localhost:3000/google/auth",
                ),
                provider: "google",
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
                await afterWebViewAction("google", navigation, authMethod);
            }
        });
    }, [navigation, authMethod]);

    return (
        <TouchableOpacity
            onPress={onPressGoogle}
            style={{
                width: 50,
                height: 50,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "black",
            }}>
            <Image
                source={require("../../assets/Google.png")}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
        </TouchableOpacity>
    );
}
