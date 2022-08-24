import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "white",
        },
      })}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
