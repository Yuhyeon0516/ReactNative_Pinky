import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import PinkButton from "../../components/common/PinkButton";
import GroupInputBox from "../../components/popup/GroupInputBox";
import Spacer from "../../components/common/Spacer";
import {handleAddGroup} from "../../utils/pb";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {useRecoilState} from "recoil";
import {MyAttendGroupsState} from "../../global/recoil";

export default function AddGroup() {
    const [groupName, setGroupName] = useState("");
    const [maxPersonnel, setMaxPersonnel] = useState("");
    const [_, setMyAttendGroups] = useRecoilState(MyAttendGroupsState);

    const navigation = useNavigation<NavigationProp<StackParams>>();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "whitesmoke",
            }}>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="그룹 생성하기" />

                <GroupInputBox
                    value={groupName}
                    onChangeText={setGroupName}
                    title="그룹명"
                    placeHolder="만들고 싶은 그룹명을 입력해주세요!"
                />

                <Spacer height={15} />

                <GroupInputBox
                    value={maxPersonnel}
                    onChangeText={setMaxPersonnel}
                    title="인원수"
                    placeHolder="그룹의 최대 인원수를 입력해주세요!"
                    keyboardType="number-pad"
                />

                <Spacer height={15} />

                <View style={{width: "50%", alignSelf: "center"}}>
                    <PinkButton
                        text="생성하기"
                        onPress={() =>
                            handleAddGroup(
                                groupName,
                                maxPersonnel,
                                navigation,
                                setMyAttendGroups,
                            )
                        }
                    />
                </View>
            </ScrollView>
        </View>
    );
}
