import { Pressable, Text } from "react-native";

type ColoredButtonProps = {
  color?: "green" | "blue" | "gray";
  text: string;
  size?: "sm" | "md" | "lg";
};

const ColoredButton = ({
  color = "green",
  text,
  size = "lg",
}: ColoredButtonProps) => {
  const bgColor =
    color === "green"
      ? "bg-pointgreen"
      : color === "blue"
      ? "bg-blue"
      : "bg-graybackground";

  const textColor =
    color === "green" || color === "blue" ? "text-white" : "text-title";

  const width =
    size === "lg"
      ? "w-full"
      : size === "md"
      ? "w-1/2"
      : "w-auto self-start py-1";

  return (
    <Pressable
      className={`flex flex-row justify-center items-center py-4 ${width} rounded-lg ${bgColor} border border-none`}
    >
      <Text className={`ml-3 mr-3 text-sm text-left ${textColor}`}>{text}</Text>
    </Pressable>
  );
};

export default ColoredButton;
