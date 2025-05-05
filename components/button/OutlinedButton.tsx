import { Pressable, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";

type OutlinedButtonProps = {
  color?: "green" | "gray";
  text: string;
};

const OutlinedButton = ({ color = "green", text }: OutlinedButtonProps) => {
  const borderColor = color === "green" ? "border-pointgreen" : "border-label";
  const textColor = color === "green" ? "text-pointgreen" : "text-label";

  return (
    <Pressable
      className={`flex flex-row justify-center items-center py-2 w-14 rounded-lg bg-white border border ${borderColor}`}
    >
      <Text className={`ml-3 mr-3 text-sm text-left ${textColor}`}>{text}</Text>
    </Pressable>
  );
};

export default OutlinedButton;
