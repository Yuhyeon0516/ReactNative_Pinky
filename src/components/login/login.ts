import {NavigationProp} from "@react-navigation/native";
import pb from "../../utils/pb";
import {AuthMethodDataType, StackParams} from "../../types/type";

export async function getAuthMethods(provider: string) {
    const auth = await pb.collection("users").listAuthMethods();

    return auth.authProviders.filter(item => item.name === provider)[0];
}

export async function afterWebViewAction(
    provider: string,
    navigation: NavigationProp<StackParams>,
    authMethod: AuthMethodDataType,
) {
    try {
        if (authMethod.afterState === authMethod.beforeState) {
            pb.autoCancellation(false);
            pb.authStore.clear();
            await pb
                .collection("users")
                .authWithOAuth2Code(
                    provider,
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
}
