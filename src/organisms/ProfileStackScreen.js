import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EditProfileScreen from "./EditProfileScreen";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = (parentProps) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{ title: "Edit Profile" }}
      >
        {(props) => (
          <EditProfileScreen
            {...props}
            deleteValueFor={parentProps.deleteValueFor}
          />
        )}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
