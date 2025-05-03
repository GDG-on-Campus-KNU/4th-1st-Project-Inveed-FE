import { View, Text } from "react-native";
import "@/global.css";
import tw from "@/utils/tw";

type InvestItemProps = {
  name: string;
  shares: number;
  price: number;
  diffAmount: number;
  diffPercent: number;
};

const InvestItem = ({
  name,
  shares,
  price,
  diffAmount,
  diffPercent,
}: InvestItemProps) => {
  const isNegative = diffAmount < 0;

  return (
    <View style={tw`flex flex-row w-full`}>
      <View
        style={tw`flex flex-col justify-center items-start flex-grow px-4 py-3 w-auto`}
      >
        <Text style={tw`text-black`}>{name}</Text>
        <Text style={tw`text-xs text-gray-400 mt-0.5`}>
          {shares.toFixed(6)}주
        </Text>
      </View>
      <View style={tw`flex flex-col justify-center items-end px-4 py-3 w-auto`}>
        <Text style={tw`text-black font-semibold`}>
          {price.toLocaleString()}원
        </Text>
        <Text
          style={tw`text-xs mt-0.5 ${
            isNegative ? "text-blue-400" : "text-red-400"
          }`}
        >
          {isNegative ? "" : "+"}
          {diffAmount} ({diffPercent}%)
        </Text>
      </View>
    </View>
  );
};

export default InvestItem;
