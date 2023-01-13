import axios from "axios";
import React, { useState } from "react";
import {
  VStack,
  Input,
  Icon,
  Text,
  Center,
  FlatList,
  Spacer,
  HStack,
  Pressable,
  Image,
  SearchIcon,
  Heading,
  Container,
  Box,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import DismissKeyboardView from "../molecules/DismissKeyboardHOC";

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
    <Center pt="4" flex={1} justifyContent="flex-start">
      <VStack w="90%" space={5} alignSelf="center">
        <Input
          placeholder="Search..."
          variant="outline"
          width="100%"
          borderRadius="10"
          py="3"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          // value={input}
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
      </VStack>

      {input.length > 0 ? (
        <FlatList
          width="90%"
          height="100%"
          data={results}
          renderItem={({ item }) => (
            <Pressable
              _dark={{
                borderColor: "muted.50",
              }}
              key={item.id.toString()}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
              onPress={() =>
                navigation.navigate("BookScreen", {
                  bookId: item.id,
                  title: item.title,
                  authorName: item.name,
                })
              }
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Image
                  size="sm"
                  source={{
                    uri: item.cover,
                  }}
                  alt={item.title}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.title}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.name}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Box flex={1} justifyContent="center">
          <VStack alignItems="center">
            <SearchIcon size="20" />
            <Heading size="sm">Search For Books, Authors, or Users</Heading>
          </VStack>
        </Box>
      )}
    </Center>
  );
};

export default SearchScreen;
