type Location = {
    lng: number;
    lag: number;
};

export type PromiseType = {
    location: Location;
    groupId: string;
    time: Date;
    alarmTime: Date;
    trackingStartTime: Date;
    trakingEndTime: Date;
};

export type StackParams = {
    Main: undefined;
    AddPromise: undefined;
    AddGroup: undefined;
    Register: undefined;
    Login: undefined;
    WebView: {
        url: string;
        provider: string;
    };
};

export type ScreenBaseProps = {
    children: React.ReactNode;
    floatButtonShow?: boolean;
    onClickAdd?: () => void;
};

export type AuthMethodDataType = {
    beforeState: string;
    codeVerifier: string;
    code: string;
    afterState: string;
    authUrl: string;
};
