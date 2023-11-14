import { VStack, Heading, Center } from "native-base";
import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface DataFormProps {
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
}

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
  confirmation_password: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "A senha precisa ser igual"),
});

export const SignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFormProps>({
    resolver: yupResolver(schema),
  });

  function handleSignUp(data: DataFormProps) {
    console.log(data);
  }

  return (
    <VStack bgColor={"gray.300"} flex={1} px={10}>
      <Center>
        <Heading my={24}>Cria sua conta</Heading>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              secureTextEntry
              placeholder="Senha"
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmation_password"
          render={({ field: { onChange } }) => (
            <Input
              secureTextEntry
              placeholder="Confirme a senha"
              onChangeText={onChange}
              errorMessage={errors.confirmation_password?.message}
            />
          )}
        />

        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
};
