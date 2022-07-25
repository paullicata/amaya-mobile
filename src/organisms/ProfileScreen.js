import React from "react";
import { Button, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile!</Text>
      <Button
        title="Go to Edit Profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
    </View>
  );
};

export default ProfileScreen;
