import { View, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";
import { FontAwesome5 } from "@expo/vector-icons";
import { getCategoryIcon } from "./iconMapper";

type ExpenseTypeProps = {
  category:
    | "food"
    | "cafe"
    | "entertainment"
    | "life"
    | "beauty"
    | "fashion"
    | "health"
    | "others";
  name: string;
  amount: number;
};

const ExpenseItem = ({ category, name, amount }: ExpenseTypeProps) => {
  const { name: iconName, color, title } = getCategoryIcon(category);

  return (
    <View
      style={tw`flex flex-row w-full justify-center items-center px-4 py-3 `}
    >
      <View
        style={tw`mr-3 items-center justify-center w-8 h-8 bg-white rounded-full`}
      >
        <FontAwesome5 name={iconName} size={16} color={color} />
      </View>

      <View style={tw`flex flex-col justify-center items-start flex-grow`}>
        <Text style={tw`text-black`}>{name}</Text>
        <Text style={tw`text-xs text-gray-400 mt-0.5`}>{title}</Text>
      </View>
      <Text style={tw`text-gray-400`}>- {amount.toLocaleString()}원</Text>
    </View>
  );
};

export default ExpenseItem;
