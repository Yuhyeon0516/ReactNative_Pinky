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
};

export type ScreenBaseProps = {
    children: React.ReactNode;
    floatButtonShow?: boolean;
    onClickAdd?: () => void;
};
