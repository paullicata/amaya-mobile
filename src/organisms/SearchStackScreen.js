import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BookScreen from "./BookScreen";
import SearchScreen from "./SearchScreen";

const SearchStack = createNativeStackNavigator();

function SearchStackScreen(parentProps) {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" options={{ title: "Search" }}>
        {(props) => <SearchScreen {...props} />}
      </SearchStack.Screen>
      <SearchStack.Screen name="BookScreen" options={{ title: "View a Book" }}>
        {(props) => <BookScreen {...props} />}
      </SearchStack.Screen>
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen;
