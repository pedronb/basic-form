import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bg="gray.200"
        fontSize="md"
        isInvalid={invalid}
        placeholderTextColor="gray.500"
        h={16}
        {...rest}
        _focus={{
          bg: "gray.400",
          borderWidth: 2,
          borderColor: "green.500",
        }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
