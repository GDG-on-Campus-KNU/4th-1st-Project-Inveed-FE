import { Pressable, Text, View } from 'react-native';

type RealTimeSearchKeywordProps = {
  index: number;
  label: string;
  current: number;
};

export const RealTimeSearchKeyword = ({
  index,
  label,
  current,
}: RealTimeSearchKeywordProps) => {
  return (
    <Pressable>
      <View className="flex flex-row gap-2 bg-white p-1.5 justify-between">
        <Text className="text-title">
          {index} {label}
        </Text>
        <Text className="text-red">+{current}%</Text>
      </View>
    </Pressable>
  );
};
