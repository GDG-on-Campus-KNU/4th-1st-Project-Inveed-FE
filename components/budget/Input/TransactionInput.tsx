import { View, Text, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { colors } from "@/constants";

const TransactionInput = () => {
  return (
    <View className="flex flex-row justify-between items-center w-full px-4 py-5 border-b border-label">
      <Text className="w-1/5 text-start font-semibold text-title">
        거래내용
      </Text>
      <TextInput
        placeholder="거래내용을 입력해 주세요"
        placeholderTextColor={colors.LABEL}
        className="flex-grow text-start text-black border-none outline-none"
        underlineColorAndroid="transparent"
        selectionColor="#00000000"
      />
      <FontAwesome name="chevron-right" size={16} color="gray" />
    </View>
  );
};

export default TransactionInput;
