import {SafeAreaView} from "react-native";
import React from "react";
import WebView, {WebViewNavigation} from "react-native-webview";
import {
    NavigationProp,
    RouteProp,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import "react-native-url-polyfill/auto";
import {useRecoilState} from "recoil";
import {AuthMethodState} from "../../global/recoil";

export default function WebViewScreen() {
    const route = useRoute<RouteProp<StackParams>>();
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const customUserAgent = "Chrome/56.0.0.0 Mobile";
    const [_, setAuthMethod] = useRecoilState(AuthMethodState);

    function onNavigationStateChange(navState: WebViewNavigation) {
        if (navState.url.includes("http://localhost:3000", 0)) {
            const queryParams = new URL(navState.url).searchParams;
            const code = queryParams.get("code");
            const state = queryParams.get("state");

            if (code && state) {
                setAuthMethod(prev => {
                    return {
                        ...prev,
                        afterState: state,
                        code: code,
                    };
                });
                navigation.goBack();
            }
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                source={{uri: route.params?.url ?? ""}}
                userAgent={customUserAgent}
                onNavigationStateChange={onNavigationStateChange}
                sharedCookiesEnabled
                thirdPartyCookiesEnabled
            />
        </SafeAreaView>
    );
}
