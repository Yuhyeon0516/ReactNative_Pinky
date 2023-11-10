import {atom} from "recoil";
import {AuthMethodDataType, GroupType} from "../types/type";

export const AuthMethodState = atom<AuthMethodDataType>({
    key: "AUTHMETHOD",
    default: {
        beforeState: "",
        code: "",
        codeVerifier: "",
        afterState: "",
        authUrl: "",
    },
});

export const MyAttendGroupsState = atom<GroupType[]>({
    key: "MYATTENDGROUPSSTATE",
    default: [],
});
