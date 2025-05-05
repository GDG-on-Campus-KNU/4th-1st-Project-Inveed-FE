import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TotalExpense = ({ amount }: { amount: number }) => {
  const formattedAmount = new Intl.NumberFormat("ko-KR").format(amount);

  return (
    <View className="flex flex-row justify-start items-center w-full px-4 py-4 rounded-lg shadow-lg bg-white">
      <View className="flex flex-col justify-start items-start flex-grow">
        <Text className="text-sm font-semibold text-title">이달의 총 지출</Text>
        <Text className="text-xl font-bold mt-0.5 text-pointgreen">
          {formattedAmount}원
        </Text>
      </View>
      <FontAwesome name="chevron-right" size={16} color="gray" />
    </View>
  );
};

export default TotalExpense;
