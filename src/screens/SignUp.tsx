import { VStack, Heading, Center } from "native-base";
import React from "react";
import { Input } from "../components/Input";

export const SignUp: React.FC = () => {
  return (
    <VStack bgColor={"gray.300"} flex={1} px={10}>
      <Center>
        <Heading my={24}>Cria sua conta</Heading>

        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />
      </Center>
    </VStack>
  );
};
