import { Pressable, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";
import GoogleLogo from "@/assets/images/google-logo.svg";

const Filledbutton = () => {
  return (
    <Pressable
      style={tw`flex flex-row justify-center items-center w-full py-4 rounded-lg bg-white border border-gray-300`}
    >
      <GoogleLogo width={16} height={16} />
      <Text style={tw`ml-2 text-sm text-left`}>Google로 시작하기</Text>
    </Pressable>
  );
};

export default Filledbutton;
