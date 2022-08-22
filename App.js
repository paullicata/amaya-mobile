import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import ProfileStackScreen from "./src/organisms/ProfileStackScreen";
import HomeStackScreen from "./src/organisms/HomeStackScreen";
import SearchStackScreen from "./src/organisms/SearchStackScreen";
import AuthScreen from "./src/organisms/AuthScreen";
import {
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { tokenState } from "./src/atoms/tokenState";
import { userState } from "./src/atoms/userState";

const Tab = createBottomTabNavigator();

function App() {
  const [jwt, setJwt] = useRecoilState(tokenState);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function deleteValueFor(key) {
    await SecureStore.deleteItemAsync(key).then(() => {
      setJwt(null);
    });
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setJwt(result);
    } else {
      alert("No values stored under that key.");
    }
  }

  useEffect(() => {
    getValueFor("jwt");
  }, []);

  if (!jwt) {
    return <AuthScreen setJwt={setJwt} />;
  } else if (jwt) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "ios-person" : "ios-person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Profile">
            {(props) => (
              <ProfileStackScreen {...props} deleteValueFor={deleteValueFor} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const AppRoot = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppRoot;
