import { Pressable, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";

const RoundButton = ({ text }: { text: string }) => {
  return (
    <Pressable
      style={tw`flex flex-row justify-center items-center py-3 w-auto self-start rounded-full bg-green-500`}
    >
      <Text style={tw`ml-5 mr-5 text-sm text-left text-white font-semibold`}>
        {text}
      </Text>
    </Pressable>
  );
};

export default RoundButton;
