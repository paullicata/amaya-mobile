import axios from "axios";
import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    axios.get("http://localhost:3000/");
  });
  return (
    <View style={styles.container}>
      <View style={styles.editProfileButton}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.name}>Paul Licata</Text>

      <View style={styles.statsGroup}>
        <Text style={styles.stats}>Logs: 15</Text>
        <Text style={styles.stats}>Followers: 174</Text>
        <Text style={styles.stats}>Following: 99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  editProfileButton: {
    alignSelf: "flex-end",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    fontSize: 50,
  },
  stats: {
    fontSize: 18,
    padding: 5,
  },
  statsGroup: {
    flexDirection: "row",
  },
});

export default ProfileScreen;
