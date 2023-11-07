import React from "react";
import ScreenBase from "../../components/common/ScreenBase";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {Text, View} from "react-native";
import PinkButton from "../../components/common/PinkButton";
import Spacer from "../../components/common/Spacer";
// import NaverMapView from "react-native-nmap";

export default function GroupScreen() {
    const navigation = useNavigation<NavigationProp<StackParams>>();
    const groupList = [];

    function onClickAdd() {
        navigation.navigate("AddGroup");
    }

    return (
        <ScreenBase onClickAdd={onClickAdd}>
            {/* <NaverMapView style={{flex: 1}} /> */}
            {groupList.length ? (
                <></>
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
                    <PinkButton text="그룹 만들기" />
                </View>
            )}
        </ScreenBase>
    );
}
