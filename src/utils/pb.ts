import AsyncStorage from "@react-native-async-storage/async-storage";
import {CommonActions, NavigationProp} from "@react-navigation/native";
import PB, {AsyncAuthStore} from "pocketbase";
import {Alert, Platform} from "react-native";
import eventSource from "react-native-sse";
import {StackParams} from "../types/type";

declare global {
    const EventSource: eventSource;
}

const store = new AsyncAuthStore({
    save: async serialized => AsyncStorage.setItem("pb_auth", serialized),
    initial: AsyncStorage.getItem("pb_auth"),
});

const pb = new PB(
    Platform.OS === "android"
        ? "http://10.0.2.2:8090"
        : "http://127.0.0.1:8090",
    store,
);

export default pb;

export async function handleLogin(
    email: string,
    password: string,
    navigation: NavigationProp<StackParams>,
) {
    try {
        await pb.collection("users").authWithPassword(email, password);

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: "Main"}],
            }),
        );
        navigation.navigate("Main");
        // TODO: Login state 관리
    } catch (error: any) {
        Alert.alert("이메일 또는 비밀번호가\n일치하지 않습니다.");
    }
}
