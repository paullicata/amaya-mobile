import React from "react";
import { Button, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
      <Button
        title="Go to Edit Profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
    </View>
  );
};

export default ProfileScreen;
