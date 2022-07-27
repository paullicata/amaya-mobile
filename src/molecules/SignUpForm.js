import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";

const SignUpForm = () => {
  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [passwordConfirmation, onChangePasswordConfirmation] = useState();

  sendRegistration = () => {
    axios
      .post("/users", {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangePassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Password Confirmation"
        onChangeText={onChangePasswordConfirmation}
        value={passwordConfirmation}
      />
      <Button title="Register" />
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
});

export default SignUpForm;
