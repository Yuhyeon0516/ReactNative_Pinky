/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import ScreenBase from "../../components/common/ScreenBase";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {FlatList, Text, View} from "react-native";
import PinkButton from "../../components/common/PinkButton";
import Spacer from "../../components/common/Spacer";
import {useRecoilValue} from "recoil";
import {MyAttendGroupsState} from "../../global/recoil";
import GroupItem from "../../components/group/GroupItem";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
// import NaverMapView from "react-native-nmap";
/* <NaverMapView style={{flex: 1}} /> */

export default function GroupScreen() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const myAttendGroup = useRecoilValue(MyAttendGroupsState);
    const bottomTabHeight = useBottomTabBarHeight();

    function onClickAdd() {
        navigation.navigate("AddGroup");
    }

    return (
        <ScreenBase onClickAdd={onClickAdd}>
            {myAttendGroup.length ? (
                <>
                    <Spacer height={10} />
                    <FlatList
                        data={myAttendGroup}
                        renderItem={({item}) => <GroupItem group={item} />}
                        ItemSeparatorComponent={() => <Spacer height={15} />}
                    />
                    <Spacer height={bottomTabHeight + 30} />
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
                        참석한 그룹이 없습니다.
                    </Text>
                    <Text
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 20,
                        }}>
                        친구들과 그룹을 만들어볼까요?
                    </Text>
                    <Spacer height={30} />
                    <View style={{width: "50%"}}>
                        <PinkButton text="그룹 만들기" onPress={onClickAdd} />
                    </View>
                </View>
            )}
        </ScreenBase>
    );
}
