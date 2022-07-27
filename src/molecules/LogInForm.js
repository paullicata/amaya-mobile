import axios from "axios";
import React, { useState } from "react";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

const LogInForm = () => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  return (
    <View>
      <Text style={styles.title}>Log In</Text>
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

export default LogInForm;
