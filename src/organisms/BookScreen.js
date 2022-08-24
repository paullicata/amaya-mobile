import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View } from "react-native";

const BookScreen = ({ route }) => {
  const [bookInfo, setBookInfo] = useState();
  const { bookId } = route.params;

  useEffect(() => {
    Promise.all([getBookInfo()]).then(function (results) {
      const book = results[0].data;
      setBookInfo(book);
    });
  }, []);

  function getBookInfo() {
    return axios.get(`http://localhost:3000/books/${bookId}`);
  }
  return (
    <View>
      <Text>{bookInfo ? bookInfo.title : ""}</Text>
    </View>
  );
};

export default BookScreen;
