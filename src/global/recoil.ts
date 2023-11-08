import {atom} from "recoil";
import {AuthMethodDataType} from "../types/type";

export const AuthMethodState = atom<AuthMethodDataType>({
    key: "AUTHMETHOD",
    default: {
        state: "",
        verifier: "",
    },
});
