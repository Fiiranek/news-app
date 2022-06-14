import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
export default function Error() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name="error" size={50} color={"black"} />
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Wystąpił błąd
      </Text>
    </View>
  );
}
