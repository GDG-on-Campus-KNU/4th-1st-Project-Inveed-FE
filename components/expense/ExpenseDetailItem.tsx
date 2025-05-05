import { View, Text, Image } from "react-native";

type ExpenseDetailItemProps = {
  date: string;
  img_url: string;
  name: string;
  detail: string;
  price: number;
  type: "income" | "expense";
};

export const ExpenseDetailItem = ({
  date,
  img_url,
  name,
  detail,
  price,
  type = "expense",
}: ExpenseDetailItemProps) => {
  return (
    <View className="flex flex-col w-full rounded-xl p-3 bg-white gap-2 shadow-md shadow-gray-300">
      <Text className="text-title text-sm">{date}</Text>
      <View className="flex flex-row w-full justify-between">
        <View className="flex flex-row">
          <Image
            source={{ uri: img_url }}
            className="w-12 h-12 rounded-full mr-md"
          />
          <View className="flex flex-col gap-0.5">
            <Text>{name}</Text>
            <Text className="text-xs text-label">{detail}</Text>
          </View>
        </View>
        <Text
          className={
            type === "income" ? "text-blue font-bold" : "font-bold text-red"
          }
        >
          {price}원
        </Text>
      </View>
    </View>
  );
};
