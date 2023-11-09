import {Image, TouchableOpacity} from "react-native";
import React, {useCallback, useEffect} from "react";
import pb from "../../utils/pb";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {useRecoilState} from "recoil";
import {AuthMethodState} from "../../global/recoil";

export default function Google() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const [authMethod, setAuthMethod] = useRecoilState(AuthMethodState);

    const getAuthMethods = useCallback(async () => {
        const auth = await pb.collection("users").listAuthMethods();
        return auth.authProviders[0];
    }, []);

    const afterWebviewAction = useCallback(async () => {
        try {
            if (authMethod.afterState === authMethod.beforeState) {
                pb.autoCancellation(false);
                await pb
                    .collection("users")
                    .authWithOAuth2Code(
                        "google",
                        authMethod.code,
                        authMethod.codeVerifier,
                        "http://localhost:3000/auth",
                    );

                navigation.navigate("Main");
            } else {
                console.log("not match state");
            }
        } catch (error: any) {
            console.log(error.originalError);
        }
    }, [authMethod, navigation]);

    const onPressGoogle = useCallback(async () => {
        try {
            const auth = await getAuthMethods();

            setAuthMethod(prev => {
                return {
                    ...prev,
                    codeVerifier: auth.codeVerifier,
                    beforeState: auth.state,
                    authUrl: auth.authUrl + "http://localhost:3000/auth",
                };
            });

            navigation.navigate("WebView", {
                url: decodeURIComponent(
                    auth.authUrl + "http://localhost:3000/auth",
                ),
            });
        } catch (error: any) {
            console.log(error.originalError);
        }
    }, [getAuthMethods, navigation, setAuthMethod]);

    useEffect(() => {
        navigation.addListener("focus", async () => {
            if (
                authMethod.afterState &&
                authMethod.beforeState &&
                authMethod.code &&
                authMethod.codeVerifier
            ) {
                await afterWebviewAction();
            }
        });
    }, [afterWebviewAction, navigation, authMethod]);

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
