import {SafeAreaView} from "react-native";
import React, {useEffect, useRef} from "react";
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
    const webViewRef = useRef<WebView>(null);

    function onNavigationStateChange(navState: WebViewNavigation) {
        if (
            navState.url.includes(
                `http://localhost:3000/${route.params!.provider}/auth`,
                0,
            )
        ) {
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

    useEffect(() => {
        webViewRef.current?.clearCache?.(true);
        webViewRef.current?.reload();
        webViewRef.current?.clearHistory?.();
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                ref={webViewRef}
                source={{uri: route.params?.url ?? ""}}
                userAgent={customUserAgent}
                onNavigationStateChange={onNavigationStateChange}
            />
        </SafeAreaView>
    );
}
