import axios from "axios";
import React, { useCallback, useState } from "react";
import deviceStorage from "../services/deviceSorage";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import DismissKeyboardView from "./DismissKeyboardHOC";

const LogInForm = (props) => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [logInError, setLogInError] = useState();

  const sendLoginInfo = useCallback(() => {
    setLogInError("");
    axios
      .post(`http://localhost:3000/users/sign_in`, {
        user: {
          email: "plicata18@gmail.com",
          password: "asdfasdf",
        },
      })
      .then((response) => {
        let jwt = response.data;
        deviceStorage.save("jwt", jwt);
        props.setJwt(jwt);
      })
      .catch((error) => {
        console.log(error);
        setLogInError("Email or password is invalid.");
      });
  }, [email, password]);

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="95%" maxW="350">
        <Heading
          size="2xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          alignSelf="center"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="sm"
          alignSelf="center"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              width="100%"
              py="3"
              px="2"
              onChangeText={onChangeEmail}
              value={email}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              width="100%"
              py="3"
              px="2"
              onChangeText={onChangePassword}
              value={password}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={sendLoginInfo}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="md"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "md",
              }}
              onPress={props.authSwitch}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LogInForm;
