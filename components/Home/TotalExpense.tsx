import { View, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TotalExpense = ({ amount }: { amount: number }) => {
  const formattedAmount = new Intl.NumberFormat("ko-KR").format(amount);

  return (
    <View
      style={tw`flex flex-row justify-start items-center w-full px-4 py-4 rounded-lg shadow-lg bg-white`}
    >
      <View style={tw`flex flex-col justify-start items-start flex-grow`}>
        <Text style={tw`text-sm font-semibold text-gray-600`}>
          이달의 총 지출
        </Text>
        <Text style={tw`text-xl font-bold mt-0.5 text-green-500`}>
          {formattedAmount}원
        </Text>
      </View>
      <FontAwesome name="chevron-right" size={16} color="gray" />
    </View>
  );
};

export default TotalExpense;
