/* eslint-disable react/no-unstable-nested-components */
import {FlatList, RefreshControl, Text, View} from "react-native";
import React, {useCallback, useState} from "react";
import ScreenBase from "../../components/common/ScreenBase";
import {PromiseType, StackParams} from "../../types/type";
import PromiseItem from "../../components/home/PromiseItem";
import Spacer from "../../components/common/Spacer";
import PinkButton from "../../components/common/PinkButton";
import {NavigationProp, useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const promiseList: PromiseType[] = [
        // TODO: server에서 data 불러오는것으로 변경
        // {
        //     location: {
        //         lng: 33,
        //         lag: 33,
        //     },
        //     groupId: "123",
        //     time: new Date(),
        //     alarmTime: new Date(),
        //     trackingStartTime: new Date(),
        //     trakingEndTime: new Date(),
        // },
        // {
        //     location: {
        //         lng: 34,
        //         lag: 34,
        //     },
        //     groupId: "124",
        //     time: new Date(),
        //     alarmTime: new Date(),
        //     trackingStartTime: new Date(),
        //     trakingEndTime: new Date(),
        // },
        // {
        //     location: {
        //         lng: 35,
        //         lag: 35,
        //     },
        //     groupId: "125",
        //     time: new Date(),
        //     alarmTime: new Date(),
        //     trackingStartTime: new Date(),
        //     trakingEndTime: new Date(),
        // },
        // {
        //     location: {
        //         lng: 35,
        //         lag: 35,
        //     },
        //     groupId: "125",
        //     time: new Date(),
        //     alarmTime: new Date(),
        //     trackingStartTime: new Date(),
        //     trakingEndTime: new Date(),
        // },
    ];

    const onRefresh = useCallback(() => {
        // TODO: 새로 약속 리스트를 불러오게 변경
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }, []);

    function onClickAdd() {
        navigation.navigate("AddPromise");
    }

    return (
        <ScreenBase onClickAdd={onClickAdd}>
            {promiseList.length ? (
                <>
                    <Spacer height={20} />
                    <FlatList
                        data={promiseList}
                        renderItem={({item: promise}) => {
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
                <View
                    style={{
                        flexDirection: "column",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 20,
                        }}>
                        약속이 없습니다.
                    </Text>
                    <Text
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 20,
                        }}>
                        약속을 잡아주세요!
                    </Text>
                    <Spacer height={30} />

                    <View style={{width: "50%"}}>
                        <PinkButton text="약속 잡기" />
                    </View>
                </View>
            )}
        </ScreenBase>
    );
}
