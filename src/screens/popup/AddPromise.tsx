import {View, ScrollView} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import GroupInputBox from "../../components/popup/GroupInputBox";
import Spacer from "../../components/common/Spacer";
import PinkButton from "../../components/common/PinkButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddPromise() {
    const [groupName, setGroupName] = useState("");
    const [maxPersonnel, setMaxPersonnel] = useState("");

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "whitesmoke",
            }}>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="약속 생성하기" />

                <View
                    style={{
                        position: "relative",
                        width: "100%",
                        justifyContent: "center",
                    }}>
                    <GroupInputBox
                        value={groupName}
                        onChangeText={setGroupName}
                        title="그룹명"
                        placeHolder=""
                    />
                    <MaterialCommunityIcons
                        name="chevron-down"
                        style={{
                            fontSize: 30,
                            position: "absolute",
                            right: 30,
                        }}
                    />
                </View>

                <Spacer height={15} />

                <GroupInputBox
                    value={maxPersonnel}
                    onChangeText={setMaxPersonnel}
                    title="약속 일자"
                    placeHolder="약속 날짜와 시간을 입력해주세요!"
                    keyboardType="number-pad"
                />

                <Spacer height={15} />
                <GroupInputBox
                    value={maxPersonnel}
                    onChangeText={setMaxPersonnel}
                    title="장소"
                    placeHolder="모일 장소를 입력해주세요!"
                    keyboardType="number-pad"
                />

                <Spacer height={15} />

                <View style={{width: "50%", alignSelf: "center"}}>
                    <PinkButton text="생성하기" onPress={() => {}} />
                </View>
            </ScrollView>
        </View>
    );
}
