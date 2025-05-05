import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getCategoryIcon } from "./iconMapper";

type ExpenseTypeProps = {
  category: "salary" | "allowance" | "scholarship" | "others";
  name: string;
  amount: number;
};

const InputItem = ({ category, name, amount }: ExpenseTypeProps) => {
  const { name: iconName, color, title } = getCategoryIcon(category);

  return (
    <View className="flex flex-row w-full justify-center items-center px-4 py-3">
      <View className="mr-3 items-center justify-center w-8 h-8 bg-white rounded-full">
        <FontAwesome5 name={iconName} size={16} color={color} />
      </View>

      <View className="flex flex-col justify-center items-start flex-grow">
        <Text className="text-black">{name}</Text>
        <Text className="text-xs text-title mt-0.5">{title}</Text>
      </View>
      <Text className="text-black">+ {amount.toLocaleString()}원</Text>
    </View>
  );
};

export default InputItem;
