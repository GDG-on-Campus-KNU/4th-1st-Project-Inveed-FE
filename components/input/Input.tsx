import { View, Text, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@/constants";

const Input = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  return (
    <View className="flex flex-row justify-between items-center w-4/5 px-4 py-5 border-b border-gray-200">
      <Text className="w-1/5 text-start font-semibold text-title">{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.LABEL}
        className="flex-grow text-start text-black border-none outline-none"
        underlineColorAndroid="transparent"
        selectionColor="#00000000"
      />
      <FontAwesome name="chevron-right" size={16} color="gray" />
    </View>
  );
};

export default Input;
