import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const SearchScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);

  const getResults = (text) => {
    axios
      .get(`http://localhost:3000/books/show_by_title/${text}`)
      .then((result) => {
        setResults(result.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={input}
        onChangeText={(text) => {
          if (searchTimer) {
            clearTimeout(searchTimer);
          }
          setInput(text);
          setSearchTimer(
            setTimeout(() => {
              if (text.length > 0) {
                getResults(text);
              }
            }, 750)
          );
        }}
      />
      {input.length > 0 ? (
        <FlatList
          data={results}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() =>
                navigation.navigate("BookScreen", {
                  bookId: item.id,
                  title: item.title,
                  authorName: item.name,
                })
              }
            >
              <View style={styles.item}>
                <View style={styles.rowContainer}>
                  <Image
                    source={{
                      uri: item.cover,
                    }}
                    style={styles.coverImage}
                  />
                  <View style={styles.bookInfo}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>By {item.name}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    flexShrink: 1,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
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
    width: 75,
    height: 90,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default SearchScreen;
