import AsyncStorage from "@react-native-async-storage/async-storage";
import {CommonActions, NavigationProp} from "@react-navigation/native";
import PB, {AsyncAuthStore} from "pocketbase";
import {Alert, Platform} from "react-native";
import eventSource from "react-native-sse";
import {AuthUserType, StackParams} from "../types/type";

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

export async function handleRegister(
    email: string,
    nickname: string,
    password: string,
    passwordConfirm: string,
    navigation: NavigationProp<StackParams>,
) {
    try {
        if (!email) {
            Alert.alert("이메일을 입력해주세요.");
            return;
        }

        if (!nickname) {
            Alert.alert("닉네임을 입력해주세요.");
            return;
        }

        if (!password || !passwordConfirm) {
            Alert.alert("비밀번호를 입력해주세요.");
            return;
        }

        if (password !== passwordConfirm) {
            Alert.alert("비밀번호가 일치하지않습니다.");
            return;
        }

        await pb.collection("users").create({
            email,
            nickname,
            password,
            passwordConfirm,
        });

        navigation.goBack();
        Alert.alert("회원가입이 완료되었습니다.\n로그인을 시도해주세요.");
    } catch (error: any) {
        if (
            error?.originalError?.data?.data?.email?.message?.includes(
                "already in use",
            )
        ) {
            Alert.alert("이미 가입 된\n이메일입니다.");
        } else if (
            error?.originalError?.data?.data?.email?.message?.includes(
                "valid email address",
            )
        ) {
            Alert.alert("이메일 형식이\n잘못되었습니다.");
        } else if (
            error?.originalError?.data?.data?.password?.message?.includes(
                "length must be between",
            )
        ) {
            Alert.alert("비밀번호가 8글자를\n초과하여야합니다.");
        } else if (
            error?.originalError?.data?.data?.nickname?.message?.includes(
                "Value must be unique",
            )
        ) {
            Alert.alert("닉네임 중복확인을 해주세요.");
        } else {
            Alert.alert("알수없는 에러가 발생하였습니다.");
        }
    }
}

export async function onPressNicknameDoubleCheck(nickname: string) {
    const result = await pb.collection("users").getFullList({
        filter: `(nickname='${nickname}')`,
    });

    if (!result.length) {
        Alert.alert("사용 가능한 닉네임입니다.");
    } else {
        Alert.alert("이미 사용중인 닉네임입니다.");
    }
}

export async function handleAddGroup(
    groupName: string,
    maxPersonnel: string,
    navigation: NavigationProp<StackParams>,
) {
    if (!groupName) {
        Alert.alert("그룹명을 입력해주세요.");
        return;
    }

    if (!maxPersonnel) {
        Alert.alert("최대 인원수를\n입력해주세요.");
        return;
    }

    const result = await pb.collection("groups").getFullList({
        filter: `(groupName='${groupName}')`,
    });

    if (result.length) {
        Alert.alert("이미 존재하는\n그룹명입니다.");
        return;
    }

    const auth = JSON.parse(
        (await AsyncStorage.getItem("pb_auth"))!.toString(),
    ) as AuthUserType;

    try {
        await pb.collection("groups").create({
            groupName,
            maxPersonnel: Number(maxPersonnel),
            currentPersonnel: 1,
            attendUsers: [auth.model.id],
        });

        navigation.goBack();

        // TODO: 내 그룹 정보 업데이트해주기
    } catch (error: any) {
        if (
            error?.originalError?.data?.data?.maxPersonnel?.message?.includes(
                "Missing required value.",
            )
        ) {
            Alert.alert("최대 인원수는 1~99로\n설정해주세요.");
            return;
        }

        Alert.alert("알수없는 에러가 발생하였습니다.");
    }
}
