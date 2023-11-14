import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      fontSize="md"
      h={16}
      {...rest}
      mb={4}
      _focus={{
        bg: "gray.200",
        borderWidth: 2,
        borderColor: "green.500",
      }}
    />
  );
}
