import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      bg="green.700"
      h={16}
      _pressed={{
        bgColor: "green.800",
      }}
      {...rest}
    >
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
