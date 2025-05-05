import { Pressable, Text } from "react-native";
import GoogleLogo from "@/assets/images/google-logo.svg";

const Loginbutton = () => {
  return (
    <Pressable className="flex flex-row justify-center items-center w-full py-4 rounded-lg bg-white border border-gray-200">
      <GoogleLogo width={16} height={16} />
      <Text className="ml-2 text-sm text-left">Google로 시작하기</Text>
    </Pressable>
  );
};

export default Loginbutton;
