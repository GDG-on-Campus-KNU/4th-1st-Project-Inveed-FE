import { Pressable, Text } from "react-native";
import tw from "@/utils/tw";

const RoundButton = ({ text }: { text: string }) => {
  return (
    <Pressable className="flex flex-row justify-center items-center py-3 w-auto self-start rounded-full bg-pointgreen">
      <Text className="ml-5 mr-5 text-sm text-left text-white font-semibold">
        {text}
      </Text>
    </Pressable>
  );
};

export default RoundButton;
