import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Green Eggs",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Green_Eggs_and_Ham.jpg",
    author: "Dr. Suess",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Winnie the Pooh",
    cover: "https://images-na.ssl-images-amazon.com/images/I/A1UJWpmlh6L.jpg",
    author: "AA Milne",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Peepo!",
    cover: "https://images-na.ssl-images-amazon.com/images/I/91wEqfYuneL.jpg",
    author: "Janet Alberg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7asf2",
    title: "Peepo!",
    cover: "https://images-na.ssl-images-amazon.com/images/I/91wEqfYuneL.jpg",
    author: "Janet Alberg",
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} cover={item.cover} author={item.author} />
  );
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Item = ({ title, cover, author }) => (
  // <View style={styles.item}>
  //   <View style={styles.rowContainer}>
  //     <Image
  //       source={{
  //         uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  //       }}
  //       style={styles.profileImage}
  //     />
  //     <Text style={styles.usernameText}>coco16</Text>
  //   </View>
  //   <View style={styles.rowContainer}>
  //     <Image
  //       source={{
  //         uri: cover,
  //       }}
  //       style={styles.coverImage}
  //     />
  //     <View style={styles.bookInfo}>
  //       <Text style={styles.title}>{title}</Text>
  //       <Text style={styles.author}>By {author}</Text>
  //     </View>
  //   </View>
  //   <Text style={styles.body}>
  //     Green Eggs and Ham is about Sam-I-Am's attempt to convince the narrator to
  //     try green eggs and ham. He spends most of the book offering the unnamed
  //     narrator different locations and dining partners to try the delicacy. In
  //     the end, the narrator relents and eats the green eggs and ham and ends up
  //     loving the food.
  //   </Text>
  // </View>
  <Box alignItems="center">
    <Box
      maxW="350"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      marginBottom="2.5"
      marginTop="2.5"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: cover,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          BOOKS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            By {author}
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  // flastList: {
  //   padding,
  // },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
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
  body: {
    fontSize: 20,
    fontWeight: "300",
  },
});

export default HomeScreen;
