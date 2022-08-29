import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [profInfo, setProfInfo] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();
  useEffect(() => {
    Promise.all([getProfileInfo(), getFollowing(), getFollowers()]).then(
      function (results) {
        const prof = results[0].data;
        const following = results[1].data;
        const followers = results[2].data;
        setProfInfo(prof);
        setFollowing(following);
        setFollowers(followers);
      }
    );
  }, []);

  function getProfileInfo() {
    return axios.get("http://localhost:3000/users/3");
  }

  function getFollowers() {
    return axios.get("http://localhost:3000/users/3/followers");
  }

  function getFollowing() {
    return axios.get("http://localhost:3000/users/3/following");
  }

  return (
    <View style={styles.container}>
      <View style={styles.editProfileButton}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
      {profInfo ? (
        <Image
          source={{
            uri: profInfo.image,
          }}
          style={styles.image}
        />
      ) : null}

      <Text style={styles.name}>
        {profInfo ? profInfo.first_name : ""}{" "}
        {profInfo ? profInfo.last_name : ""}
      </Text>

      <View style={styles.statsGroup}>
        <Text style={styles.stats}>Logs: 15</Text>
        <Text style={styles.stats}>
          Followers: {followers ? followers.length : ""}
        </Text>
        <Text style={styles.stats}>
          Following: {followers ? following.length : ""}
        </Text>
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
