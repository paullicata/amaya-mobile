import React, { useCallback, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import LogInForm from "../molecules/LogInForm";
import SignUpForm from "../molecules/SignUpForm";
import { Center } from "native-base";

function AuthScreen(props) {
  const [showLogin, setShowLogin] = useState(true);

  const authSwitch = useCallback(() => {
    setShowLogin(!showLogin);
  });

  if (showLogin) {
    return (
      <Center flex={1} px="3">
        <LogInForm
          authSwitch={authSwitch}
          setJwt={props.setJwt}
          setUser={props.setUser}
        />
      </Center>
    );
  } else {
    return (
      <View style={styles.container}>
        <SignUpForm
          authSwitch={authSwitch}
          setJwt={props.setJwt}
          setUser={props.setUser}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default AuthScreen;
