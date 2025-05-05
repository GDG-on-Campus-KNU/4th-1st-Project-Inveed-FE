import { View, Text } from "react-native";

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
    <View className="flex flex-row w-full">
      <View className="flex flex-col justify-center items-start flex-grow px-4 py-3 w-auto">
        <Text className="text-black">{name}</Text>
        <Text className="text-xs text-label mt-0.5">{shares.toFixed(6)}주</Text>
      </View>
      <View className="flex flex-col justify-center items-end px-4 py-3 w-auto">
        <Text className="text-black font-semibold">
          {price.toLocaleString()}원
        </Text>
        <Text
          className={`text-xs mt-0.5 ${isNegative ? "text-blue" : "text-red"}`}
        >
          {isNegative ? "" : "+"}
          {diffAmount} ({diffPercent}%)
        </Text>
      </View>
    </View>
  );
};

export default InvestItem;
