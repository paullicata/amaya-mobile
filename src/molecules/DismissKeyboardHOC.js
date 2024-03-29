import { Box, Center, VStack } from "native-base";
import React from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(VStack);

export default DismissKeyboardView;
