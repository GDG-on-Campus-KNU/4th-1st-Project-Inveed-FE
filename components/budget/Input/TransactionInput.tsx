import { View, Text, TextInput } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TransactionInput = () => {
  return (
    <View
      style={tw`flex flex-row justify-between items-center w-full px-4 py-5 border-b border-gray-300`}
    >
      <Text style={tw`w-1/5 text-start font-semibold text-gray-500`}>
        거래내용
      </Text>
      <TextInput
        placeholder="거래내용을 입력해 주세요"
        placeholderTextColor="#9CA3AF"
        style={[
          tw`flex-grow text-start text-black border-none outline-none`,
          { outlineStyle: "none", borderWidth: 0 },
        ]}
        underlineColorAndroid="transparent"
        selectionColor="#00000000"
      />
      <FontAwesome name="chevron-right" size={16} color="gray" />
    </View>
  );
};

export default TransactionInput;
