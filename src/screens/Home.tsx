/* eslint-disable react/no-unstable-nested-components */
import {FlatList, RefreshControl, View} from "react-native";
import React, {useCallback, useState} from "react";
import ScreenBase from "../components/common/ScreenBase";
import {PromiseType} from "../types/type";
import PromiseItem from "../components/home/PromiseItem";
import Spacer from "../components/common/Spacer";

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const promiseList: PromiseType[] = [
        // TODO: server에서 data 불러오는것으로 변경
        {
            location: {
                lng: 33,
                lag: 33,
            },
            groupId: "123",
            time: new Date(),
            alarmTime: new Date(),
            trackingStartTime: new Date(),
            trakingEndTime: new Date(),
        },
        {
            location: {
                lng: 34,
                lag: 34,
            },
            groupId: "124",
            time: new Date(),
            alarmTime: new Date(),
            trackingStartTime: new Date(),
            trakingEndTime: new Date(),
        },
        {
            location: {
                lng: 35,
                lag: 35,
            },
            groupId: "125",
            time: new Date(),
            alarmTime: new Date(),
            trackingStartTime: new Date(),
            trakingEndTime: new Date(),
        },
        {
            location: {
                lng: 35,
                lag: 35,
            },
            groupId: "125",
            time: new Date(),
            alarmTime: new Date(),
            trackingStartTime: new Date(),
            trakingEndTime: new Date(),
        },
    ];

    const onRefresh = useCallback(() => {
        // TODO: 새로 약속 리스트를 불러오게 변경
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }, []);

    return (
        <ScreenBase>
            {promiseList.length ? (
                <>
                    <Spacer height={20} />
                    <FlatList
                        data={promiseList}
                        renderItem={({item: promise}) => {
                            console.log(promise);
                            return <PromiseItem promise={promise} />;
                        }}
                        refreshControl={
                            <RefreshControl
                                onRefresh={onRefresh}
                                refreshing={refreshing}
                                colors={["#e8aced"]}
                                title="약속을 새로 불러오고 있어요."
                                titleColor="#cd0ddf"
                                tintColor="#e8aced"
                            />
                        }
                        ItemSeparatorComponent={() => <Spacer height={15} />}
                        ListFooterComponent={() => <Spacer height={100} />}
                    />
                </>
            ) : (
                <View>
                    <Text />
                </View>
            )}
        </ScreenBase>
    );
}
