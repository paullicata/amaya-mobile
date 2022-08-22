import * as SecureStore from "expo-secure-store";

const deviceStorage = {
  async save(key, value) {
    await SecureStore.setItemAsync(key, value);
  },

  async getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    } else {
      alert("No values stored under that key.");
    }
  },
};

export default deviceStorage;
