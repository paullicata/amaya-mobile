import React, { useCallback, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  HStack,
  Text,
  Link,
} from "native-base";
import deviceStorage from "../services/deviceSorage";

const SignUpForm = (props) => {
  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [passwordConfirmation, onChangePasswordConfirmation] = useState();
  const [registrationError, setRegistrationError] = useState();

  const sendRegistration = useCallback(() => {
    setRegistrationError("");
    axios
      .post("http://localhost:3000/users", {
        user: {
          email: "hehddde@gmail.com",
          username: "asdgsddsasf",
          password: "asdfasdf",
          password_confirmation: "asdfasdf",
        },
      })
      .then((response) => {
        let jwt = response.data;
        deviceStorage.save("key", jwt);
        deviceStorage.getValueFor("key");
        props.setJwt(jwt);
      })
      .catch((error) => {
        console.log(error);
        setRegistrationError("Registration failed.");
      });
  }, [username, email, password, passwordConfirmation]);

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="2xl"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
          alignSelf="center"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="sm"
          alignSelf="center"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={onChangeEmail} value={email} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={onChangeUsername} value={username} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={onChangePassword}
              value={password}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={onChangePasswordConfirmation}
              value={passwordConfirmation}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={sendRegistration}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account?
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={props.authSwitch}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpForm;
