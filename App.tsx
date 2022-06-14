import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import News from "./src/components/News";
import NewsDetails from "./src/components/NewsDetails";
import { NativeBaseProvider, Box } from "native-base";
const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitle: "Wiadomości",
            }}
          />
          <Stack.Screen name="NewsDetails" component={NewsDetails} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
