import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SearchScreen from "./SearchScreen";

const SearchStack = createNativeStackNavigator();

function SearchStackScreen(parentProps) {
  return <SearchStack.Navigator></SearchStack.Navigator>;
}

export default SearchStackScreen;
