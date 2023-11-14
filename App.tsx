import { Box, NativeBaseProvider } from "native-base";
import { SignUp } from "./src/screens/SignUp";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
