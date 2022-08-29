import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import deviceStorage from "../services/deviceSorage";

const LogInForm = (props) => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [logInError, setLogInError] = useState();

  const sendLoginInfo = useCallback(() => {
    setLogInError("");
    axios
      .post(`http://localhost:3000/users/sign_in`, {
        user: {
          email: "plicata18@gmail.com",
          password: "asdfasdf",
        },
      })
      .then((response) => {
        let jwt = response.data;
        deviceStorage.save("jwt", jwt);
        props.setJwt(jwt);
      })
      .catch((error) => {
        console.log(error);
        setLogInError("Email or password is invalid.");
      });
  }, [email, password]);

  return (
    <View>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
      <Button onPress={sendLoginInfo} title="Login" />
      <Button onPress={props.authSwitch} title="Don't have an account?" />
      <Text style={styles.errors}>{logInError}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 60,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errors: {
    textAlign: "center",
    color: "red",
  },
});

export default LogInForm;
