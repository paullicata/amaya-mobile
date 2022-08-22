import React from "react";
import { Text, View } from "react-native";
import EditProfileForm from "../molecules/EditProfileForm";

const EditProfileScreen = (props) => {
  return (
    <View>
      <EditProfileForm deleteValueFor={props.deleteValueFor} />
    </View>
  );
};

export default EditProfileScreen;
