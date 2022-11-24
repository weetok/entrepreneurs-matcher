import React from "react";
import { NativeBaseProvider, Box } from "native-base";
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Home } from "./screens/Home";
// import { Details } from "./screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box safeArea flex={1} bg="#DAD" alignItems={"center"} justifyContent="center">
          Hello world
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
