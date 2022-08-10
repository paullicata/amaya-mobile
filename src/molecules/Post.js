import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
});
export default Post;
