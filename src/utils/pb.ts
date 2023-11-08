import AsyncStorage from "@react-native-async-storage/async-storage";
import PB, {AsyncAuthStore} from "pocketbase";
import {Platform} from "react-native";
import eventSource from "react-native-sse";

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
