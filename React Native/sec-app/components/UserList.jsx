import React from "react";
import { SectionList, View, Text, Image } from "react-native";
import contactStyles from "../contactStyles";

const UserList = ({ data }) => {
    return (
    <SectionList
        sections={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View style={contactStyles.contactItem}>
            <Image source={{ uri: item.avatar }} style={contactStyles.avatar} />
            <Text style={contactStyles.nameText}>{item.name}</Text>
            <Text style={contactStyles.phoneNumberText}>{item.phoneNumber}</Text>
        </View>
        )}
        renderSectionHeader={({ section }) => (
            <View style={contactStyles.sectionHeader}>
                <Text>{section.title}</Text>
            </View>
        )}
    />
    );
};

export default UserList;

