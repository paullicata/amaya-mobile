import React, { useCallback, useState } from "react";
import axios from "axios";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import deviceStorage from "../services/deviceSorage";

const SignUpForm = (props) => {
  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [passwordConfirmation, onChangePasswordConfirmation] = useState();
  const [registrationError, setRegistrationError] = useState();

  const sendRegistration = useCallback(() => {
    setRegistrationError("");
    axios
      .post("http://localhost:3000/users", {
        user: {
          email: "hehdde@gmail.com",
          username: "asdgsdsasf",
          password: "asdfasdf",
          password_confirmation: "asdfasdf",
        },
      })
      .then((response) => {
        let jwt = response.data;
        deviceStorage.save("key", jwt);
        deviceStorage.getValueFor("key");
        props.setJwt(jwt);
      })
      .catch((error) => {
        console.log(error);
        setRegistrationError("Registration failed.");
      });
  }, [username, email, password, passwordConfirmation]);

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
      <Button title="Register" onPress={sendRegistration} />
      <Button onPress={props.authSwitch} title="Already have an account?" />
      <Text style={styles.errors}>{registrationError}</Text>
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

export default SignUpForm;
