import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SearchScreen from "./SearchScreen";

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
