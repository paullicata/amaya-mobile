import React from "react";
import { Text, View } from "react-native";
import LogInForm from "../molecules/LogInForm";
import SignUpForm from "../molecules/SignUpForm";

function SearchScreen(props) {
  console.log("search screen", props.save);
  return (
    <View>
      <LogInForm />
    </View>
  );
}

export default SearchScreen;
