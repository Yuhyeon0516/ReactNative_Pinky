import {Image, Platform, TouchableOpacity} from "react-native";
import React, {useCallback} from "react";
import pb from "../../utils/pb";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";

export default function Google() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const getAuthMethods = useCallback(async () => {
        const auth = await pb.collection("users").listAuthMethods();
        return auth.authProviders[0];
    }, []);

    const onPressGoogle = useCallback(async () => {
        try {
            const authMethod = await getAuthMethods();

            console.log(authMethod);

            navigation.navigate("WebView", {
                url: decodeURIComponent(
                    authMethod.authUrl + "http://localhost:3000/auth",
                ),
            });

            // const authData = await pb
            //     .collection("users")
            //     .authWithOAuth2Code(
            //         "google",
            //         "",
            //         authMethod.codeVerifier,
            //         decodeURIComponent(
            //             authMethod.authUrl + "http://localhost:3000/auth",
            //         ),
            //     );
            // console.log(Platform.OS, authData);
        } catch (error: any) {
            console.log(error.originalError);
        }
    }, [getAuthMethods]);

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
