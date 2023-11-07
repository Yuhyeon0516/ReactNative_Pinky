import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import PinkButton from "../../components/common/PinkButton";
import GroupInputBox from "../../components/popup/GroupInputBox";
import Spacer from "../../components/common/Spacer";

export default function AddGroup() {
    const [groupName, setGroupName] = useState("");
    const [personnel, setPersonnel] = useState("");

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
                    value={personnel}
                    onChangeText={setPersonnel}
                    title="인원수"
                    placeHolder="최대 인원수를 입력해주세요!"
                    keyboardType="number-pad"
                />

                <Spacer height={15} />

                <PinkButton text="생성하기" />
            </ScrollView>
        </View>
    );
}
