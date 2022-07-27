import React, { useState } from "react";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

const EditProfileForm = () => {
  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();

  return (
    <View>
      <Text style={styles.title}>Edit Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={onChangeFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={onChangeLastName}
        value={lastName}
      />
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

export default EditProfileForm;
