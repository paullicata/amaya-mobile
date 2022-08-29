import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View, Image, StyleSheet } from "react-native";

const BookScreen = ({ route }) => {
  const [bookInfo, setBookInfo] = useState();
  const [googleInfo, setGoogleInfo] = useState();
  const { bookId, title, authorName } = route.params;

  useEffect(() => {
    Promise.all([getBookInfo(), getGoogleBookInfo()]).then(function (results) {
      const book = results[0].data;
      const googleBookInfo = results[1].data;
      setBookInfo(book);
      setGoogleInfo(googleBookInfo);
      console.log(googleBookInfo);
    });
  }, []);

  function getBookInfo() {
    return axios.get(`http://localhost:3000/books/${bookId}`);
  }

  function getGoogleBookInfo() {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${authorName}&key=AIzaSyCGiwv9WARzYvjcpMzDfnJ26SFRsBL3zqE`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.rowContainer}>
          {googleInfo ? (
            <Image
              source={{
                uri: googleInfo.items[0].volumeInfo.imageLinks.thumbnail,
              }}
              style={styles.coverImage}
            />
          ) : null}
          <View style={styles.bookInfo}>
            <Text style={styles.title}>{bookInfo ? bookInfo.title : ""}</Text>
            <Text style={styles.author}>
              By {googleInfo ? googleInfo.items[0].volumeInfo.authors[0] : ""}
            </Text>
          </View>
        </View>
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  usernameText: {
    fontSize: 20,
    paddingLeft: 10,
    color: "grey",
  },
  rowContainer: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  bookInfo: {
    paddingLeft: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
  },
  author: {
    fontSize: 32,
    color: "gray",
    fontWeight: "300",
  },
  coverImage: {
    width: 110,
    height: 140,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default BookScreen;
