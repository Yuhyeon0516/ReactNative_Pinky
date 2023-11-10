import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {GroupType} from "../../types/type";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Spacer from "../common/Spacer";

export default function GroupItem({group}: {group: GroupType}) {
    return (
        <TouchableOpacity
            style={{width: "100%", height: 100, paddingHorizontal: 20}}>
            <View
                style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: "#e8aced",
                    borderRadius: 30,
                    padding: 20,
                    justifyContent: "center",
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                    <FontAwesome name="hashtag" size={20} color={"black"} />
                    <Text
                        style={{
                            fontSize: 16,
                            color: "black",
                            fontWeight: "600",
                        }}>
                        {" 그룹명 : "}
                        {group.groupName}
                    </Text>
                </View>

                <Spacer height={10} />

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome name="group" size={20} color={"black"} />
                    <Text
                        style={{
                            fontSize: 16,
                            color: "black",
                            fontWeight: "600",
                        }}>
                        {" 인원 : "}
                        {group.currentPersonnel}
                        {"  /  "}
                        {group.maxPersonnel}
                    </Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}} />
            </View>
        </TouchableOpacity>
    );
}
